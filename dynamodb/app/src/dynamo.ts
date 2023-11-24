import { DynamoDBClient, GetItemCommand, PutItemCommand, PutItemCommandOutput, GetItemCommandOutput, QueryCommandOutput, ScanCommand, AttributeValue, ScanCommandOutput, QueryCommand, } from "@aws-sdk/client-dynamodb"

const TABLE_NAME = "DemoEmployeeLSI"

type Item = {
  id?: string,
  name?: string,
  age?: string,
  job?: string[],
  year?: string,
  month?: string
}

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  region: "us-east-1"
});

export function insertItemIntoEmployeeTable(item: {
  id: string,
  name: string,
  age: string,
  jobs: string[],
  year: string,
  month: string
}): Promise<PutItemCommandOutput> {

  return client.send(new PutItemCommand({
    TableName: TABLE_NAME,
    Item: {
      pk_id: {
        S: item.id,
      },
      name: {
        S: item.name
      },
      age: {
        N: item.age
      },
      job: {
        SS: item.jobs
      },
      sk_year: {
        N: item.year
      },
      month: {
        N: item.month
      }
    }
  }))
}

export async function readAllItems(attributes: string = "", filter: { age: string } | undefined, pagination: { lastStartKey: string, limit: number } = { lastStartKey: "", limit: 5 }, indexName: string | undefined = undefined)
  : Promise<{
    items: Array<Item>,
    lastReadKey: string | undefined,
    response: ScanCommandOutput
  }> {
  const response = await client.send(new ScanCommand({
    TableName: TABLE_NAME,
    [indexName ? "IndexName" : ""]: indexName,
    Limit: pagination.limit,
    [pagination.lastStartKey ? "ExclusiveStartKey" : ""]: {
      pk_id: {
        S: pagination.lastStartKey[0]
      },
      sk_year: {
        N: pagination.lastStartKey.substring(1, pagination.lastStartKey.length)
      }
    },
    [attributes ? "ProjectionExpression" : ""]: attributes.replace("name", "#name"),
    [attributes ? "ExpressionAttributeNames" : ""]: {
      "#name": "name"
    },
    [filter?.age ? "FilterExpression" : ""]: "age < :ageValue",
    [filter?.age ? "ExpressionAttributeValues" : ""]: {
      ":ageValue": {
        N: filter?.age
      }
    }
  }))

  return {
    items: response.Items?.map(i => dynamoItemToItem(i)) || [],
    lastReadKey: response?.LastEvaluatedKey?.pk_id.S,
    response
  }
}

export async function readItemByID(itemId: string, itemYear: string): Promise<{
  item: Item,
  response: GetItemCommandOutput
}> {
  const response = await client.send(new GetItemCommand({
    TableName: TABLE_NAME,
    Key: {
      pk_id: {
        S: itemId
      },
      sk_year: {
        N: itemYear
      }
    },
  }))

  return {
    item: dynamoItemToItem(response?.Item || {}),
    response
  }
}

export async function queryItems(key: string): Promise<QueryCommandOutput> {
  const response = await client.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: "pk_id = :partitionKeyVal",
    ExpressionAttributeValues: {
      ":partitionKeyVal": {
        S: key
      }
    }
  }))
  console.log(response)

  return response
}

function dynamoItemToItem(item: Record<string, AttributeValue>): Item {
  return {
    id: item?.pk_id?.S,
    name: item?.name?.S,
    age: item?.age?.N,
    job: item?.job?.SS,
    year: item?.sk_year?.N,
    month: item?.month?.N
  }

}
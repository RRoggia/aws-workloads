import { insertItemIntoEmployeeTable, queryItems, readAllItems, readItemByID } from './dynamo'
import { generateNewEmployee } from './randomEmployee'
import express, { Request, Response } from "express"
const PORT = 3000

const app = express()
app.use(express.json())
app.use((req, res, next) => {
  console.log(`received request ${req.path}`)
  console.log(`With params ${JSON.stringify(req.params)}`)
  console.log(`With query ${JSON.stringify(req.query)}`)
  next()
})

app.post("/items", async (req, res) => {
  const newItem = generateNewEmployee()

  try {
    const response = await insertItemIntoEmployeeTable(newItem)
    if (response.$metadata.httpStatusCode !== 200) {
      console.log("Business error")
      res.status(400)
      res.send(response)
    }
    res.status(201)
    res.send(newItem)

  } catch (error) {
    handleErrorResponse(res, 500, error)
  }
})

app.get("/items", async (req: Request<any, any, any, {
  scanLimit: string,
  lastStartKey: string
  attributes: string,
  age: string,
  indexName: string
}>, res) => {
  const { lastStartKey = "", scanLimit = 5, attributes, age, indexName } = req.query

  try {
    const { items, response, lastReadKey } = await readAllItems(attributes, { age }, { lastStartKey, limit: Number(scanLimit) }, indexName)

    if (response.$metadata.httpStatusCode !== 200) {
      console.log("Business error")
      res.status(400)
      res.send(response)
    }
    res.status(200)
    res.send({
      count: items.length,
      items,
      pagination: {
        lastStartKey: lastReadKey
      }
    })

  } catch (error) {
    handleErrorResponse(res, 500, error)
  }
})

app.get("/queryItems/:partitionKey", async (req: Request<{ partitionKey: string }, any, any, {
  scanLimit: string,
  lastStartKey: string
  attributes: string,
  age: string
}>, res) => {
  const { partitionKey } = req.params
  const { lastStartKey = "", scanLimit = 5, attributes, age } = req.query

  try {
    const response = await queryItems(partitionKey)

    if (response.$metadata.httpStatusCode !== 200) {
      console.log("Business error")
      res.status(400)
      res.send(response)
    }
    res.status(200)
    res.send(response)

  } catch (error) {
    handleErrorResponse(res, 500, error)
  }
})

app.get("/items/:itemId", async (req: Request<{ itemId: string }>, res: Response<any>) => {
  const itemId = req.params.itemId
  const pk_id = itemId[0]
  const year = itemId.substring(1, itemId.length)
  try {
    const { item, response } = await readItemByID(pk_id, year)

    if (response.$metadata.httpStatusCode !== 200) {
      console.log("Business error")
      res.status(400)
      res.send(response)
    }
    res.status(200)
    res.send(item)

  } catch (error) {
    handleErrorResponse(res, 500, error)
  }
})

function handleErrorResponse(res: Response<any>, status: number, error: any) {
  console.error(error);
  console.log("Exception");
  res.status(status).send({ error });
}

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})

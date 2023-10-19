import { SQS } from "@aws-sdk/client-sqs"

const MINUTE_IN_MILLI_SECONDS = 60000

const sqs = new SQS({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  }
})

const QUEUE_URL = process.env.QUEUE_URL

async function readMessage() {
  const receivedMessagesResponse = await sqs.receiveMessage({
    QueueUrl: QUEUE_URL,
    AttributeNames: ["All"],
    MessageAttributeNames: ["All"],
    MaxNumberOfMessages: 10,
    VisibilityTimeout: 30,
    WaitTimeSeconds: 2,
  })

  if (receivedMessagesResponse.$metadata.httpStatusCode !== 200) {
    console.log(receivedMessagesResponse)
    throw new Error("Error in the request")
  }
  const messages = receivedMessagesResponse.Messages ?? []

  const processedEntries: Array<{ Id: string | undefined, ReceiptHandle: string | undefined }> = []

  for (const message of messages) {
    try {
      const body: { source: string } = JSON.parse(message.Body || "")
      if (body.source === "do-not-process") {
        console.log(`skipping message with receipt ${message.ReceiptHandle}`)
        continue
      }
      console.log(`processing message with receipt ${message.ReceiptHandle}`)
      processedEntries.push({
        Id: message.MessageId,
        ReceiptHandle: message.ReceiptHandle
      })
    } catch (e) {
      console.log("Error processing message")
    }
  }

  if (processedEntries.length == 0) {
    console.log("Nothing to delete.")
    return
  }

  console.log(`delete message with receipt ${processedEntries.map(e => e.ReceiptHandle)}`)
  const deleteMessageBatchResponse = await sqs.deleteMessageBatch({
    Entries: processedEntries,
    QueueUrl: QUEUE_URL
  })

  if (deleteMessageBatchResponse.$metadata.httpStatusCode === 200) {
    console.log("deleted messages correctly")
  } else {
    console.log("Error, messages are going back to queue")
    console.log(deleteMessageBatchResponse)
  }
}

async function readMessageInLoop() {
  while (true) {
    console.log("Reading a batch of messages")
    await Promise.all([readMessage(), new Promise(r => setTimeout(r, MINUTE_IN_MILLI_SECONDS))])
  }
}

readMessageInLoop().then(e => console.log("finish")).catch(e => console.log(e))

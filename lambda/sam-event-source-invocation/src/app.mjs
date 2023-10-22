export const lambdaHandler = async (event, context) => {

	console.log(typeof event === "string" ? event : JSON.stringify(event))
	console.log(typeof context === "string" ? context : JSON.stringify(context))

	const { Records: records } = event
	const failed = []
	for (let record of records) {
		console.log(record)
		try {
			const messageBody = typeof record.body === "object" ? record.body : JSON.parse(record.body)

			if (!("process" in messageBody) || !messageBody.process) {
				failed.push(record.messageId)
			}
		} catch (e) {
			console.log(e)
			console.log(`Event body is not JSON. Body: ${record.body}`)
			failed.push(record.messageId)
		}
	}

	const batchResponse = {
		batchItemFailures: failed.map(f => ({ itemIdentifier: f }))
	}
	console.log(`responding with ${JSON.stringify(batchResponse)}`)
	return batchResponse
}

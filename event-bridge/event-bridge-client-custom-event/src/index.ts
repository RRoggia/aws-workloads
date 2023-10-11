import { EventBridge } from "@aws-sdk/client-eventbridge";

const eventbridge = new EventBridge({
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY || "",
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
	}
})
const input = {
	Entries: [
		{
			EventBusName: "demo-event-bus",
			Source: "demo-app",
			DetailType: "i-dont-know",
			Time: new Date(),
			Detail: JSON.stringify({
				name: "renan",
				number: Math.random() * 100
			}),
		},
	]
}

async function sendEvent() {
	const response = await eventbridge.putEvents(input)
	console.log(response)
}

sendEvent().then(e => console.log("finish")).catch(e => console.log(e))



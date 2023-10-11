# Event-Bridge
This folder provides the IaaC and the Applications to reproduce the following architecture:

![Demo architecture](./diagram/demo-architecture.png)

## Description
In this demo a **Producer** Node Js application called `event-bridge-client-custom-event` publishes a custom event to a **Custom Event Bus**. The Event Bus applies the **Rules**' event pattern to determine if the events are a match. In this example, the rule is configured to publish the event to a SQS **Standard queue**. A **Consumer** Node Js application using the AWS SDK receives and deletes the messages from the queue.

- Event Bus 
    - Send Event to bus
    - Rule sending to SQS
- Pipes
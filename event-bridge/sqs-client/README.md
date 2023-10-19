# sqs-client
This is a simple message consumer that uses SQS API to receive and delete messages.

# Running the app
This application requires Typescript and NodeJs. After you configured the required dependencies, install all the node dependencies:

```sh
    npm i
```

In the command below replace <key> and <secret> and <Q> with your aws key,s secret and your SQS queue URL or make sure they are available as environemnt variables.

```sh
    npm run compile && AWS_ACCESS_KEY=<key> AWS_SECRET_ACCESS_KEY=<secret> QUEUE_URL=<Q> npm start
```

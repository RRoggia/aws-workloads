# event-bridge-client-custom-event
Simple event producer application that uses Event Brige SDK to publish events.

# Running the app
This application requires Typescript and NodeJs. After you configured the required dependencies, install all the node dependencies:

```sh
    npm i
```

In the command below replace <key> and <secret> with your aws key and secret, or make sure they are available as environemnt variables.

```sh
    npm run compile && AWS_ACCESS_KEY=<key> AWS_SECRET_ACCESS_KEY=<secret> npm start
```
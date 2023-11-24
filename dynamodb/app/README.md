# app

Run the app:
```
$ npm run compile && AWS_ACCESS_KEY=<ACCESS_KEY> AWS_SECRET_ACCESS_KEY=<SECRET_ACCESS_KEY> npm start
```

## Item API

### `POST /items`
Generates an item. When you call this API it pushes an event to the Dynamo Streams which triggers the Lsambda.

### `GET /items`
Params:
- `lastStartKey`: The last Key read
- `scanLimit`: The maximum number of items to be scanned
- `attributes`: The attributes to be returned in the response
- `age`: A number, allows querying with this parameter

### `Get /queryItems/:PartitionKey`
Returns all the items with partition key sorted by sorted key.

### `Get /items/:primaryKey`
Returns specific item with primary key
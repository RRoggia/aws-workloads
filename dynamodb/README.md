# Dynamo DB

This repository implements a HTTP API that integrates with a Dynamo DB table exposing a simple CRUD API. See the [HTTP Api folder](./app) to check the API Methods. 

The infrastructure spins two tables:
- Table with Simple Primary Key
- Table with Composed Primary Key, a Local Secondary Index and a Stream
- A Simple Hello World Lambda 
- The role to allow the lambda to consume the DynamoDB Stream

The diagram below depicts the main components implemented in this architecture.
![Architecture's overview](./diagram/overview.png)
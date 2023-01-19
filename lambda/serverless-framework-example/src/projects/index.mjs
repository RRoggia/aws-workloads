function createProjectHandler(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log("Inside createProjectHandler")
  console.log("Received body", event.body || "empty")
  console.log("Param is", event?.pathParameters.id)

  const response = {
    project: event?.pathParameters.id
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(response)
  })
}
function deleteProjectHandler(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log("Inside deleteProjectHandler")
  console.log("Received body", event.body || "empty")
  console.log("Param is", event?.pathParameters.id)

  const response = {
    project: event?.pathParameters.id
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(response)
  })

}
function getProjectHandler(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log("Inside getProjectHandler")
  console.log("Received body", event.body || "empty")
  console.log("Param is", event?.pathParameters.id)

  const response = {
    project: event?.pathParameters.id
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(response)
  })

}
function getProjectsHandler(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log("Inside getProjectsHandler")
  console.log("Received body", event.body || "empty")

  const response = [{
    project: "all projects go here"
  }]

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(response)
  })
}

export {
  createProjectHandler,
  deleteProjectHandler,
  getProjectHandler,
  getProjectsHandler
}
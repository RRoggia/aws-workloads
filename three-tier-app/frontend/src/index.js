const express = require('express')
const path = require('path')
const app = express()
const { fetchProjects } = require('./projectService')
const { generateProjectHTML } = require('./htmlGenerator/index')

const serverPort = process.env.serverPort || 3000

app.use("/", express.static(path.join(__dirname, 'public')))

app.get("/projects", async (req, res) => {
  const projects = await fetchProjects()
  const html = generateProjectHTML(projects)

  res
    .status(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(html)
})

app.listen(serverPort, () => {
  console.log(`Listening port ${serverPort}`)
})
import express from 'express'
const app = express()
const randomID = Math.random() * 10
const SERVER_PORT = process.env.APP_SERVER_PORT || 3000

app.get("/hello", (req, res) => {
    console.log(`Hello from ${randomID}`)
    res.status(200)
    res.send("Hello!!")
})

app.get("/", (req, res) => {
    console.log(`Success from ${randomID}`)
    res.status(200)
    res.send("sucess!!")
})

app.listen(SERVER_PORT, ()=> {
    console.log(`listening port ${SERVER_PORT}`)
})
const express = require("express")
const { getTask } = require("./rabbit-utils/receiveTask");

const app = express()
const PORT = 8000
const RABBIT_HOST = "localhost:5672"
const QUEUE_A = "queue_a"
const QUEUE_B = "queue_b"

app.listen(PORT, () => {
    console.log(`Server B: http://localhost:${PORT}`)

    getTask(RABBIT_HOST, QUEUE_A)
})

const express = require("express")
const taskReceiver = require("./rabbit-utils/receiveTask");

const app = express()
const PORT = 8000
const RABBIT_HOST = "rabbitmq:5672"
const QUEUE_A = "queue_a"
const QUEUE_B = "queue_b"

taskReceiver.getTask(RABBIT_HOST, QUEUE_A)

app.listen(PORT, () => {
    console.log(`Server B: http://localhost:${PORT}`)
})

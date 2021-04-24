const express = require("express")
const taskReceiver = require("./rabbit-utils/receiveTask");
const settings = require("./settings");

const app = express()
const PORT = 8000
const RABBIT_HOST = "rabbitmq:5672"

taskReceiver.getTask(RABBIT_HOST, settings.orderGenerationQueue)

app.listen(PORT, () => {
    console.log(`Server B: http://localhost:${PORT}`)
})

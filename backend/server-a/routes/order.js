const express = require("express");
const router = express.Router();

const rabbitHost = "rabbitmq:5672";
const rabbitTaskSender = require("../rabbit-utils/sendTask")
const orderGenerationQueue = "orderGenerationQueue";

const orderService = require("../services/order.js");

/* GET order by id. */
router.get("/:orderId", async function (req, res) {
    const orderId = req.params.orderId;
    try {
        const order = await orderService.getOrderById(orderId);
        res.json(order);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

/* DELETE order by id. */
router.delete("/:orderId", async function (req, res) {
    const orderId = req.params.orderId;
    try {
        const order = await orderService.deleteOrderById(orderId);
        res.json(order);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

/* GET all orders. */
router.get("/", async function (req, res) {
    try {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

/* Post and order. */
router.post("/", async function (req, res) {
    const newOrder = req.body;
    try {
        const order = await orderService.addOrder(newOrder);
        rabbitTaskSender.addTask(order, rabbitHost, orderGenerationQueue)
        res.json(order);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

module.exports = router;

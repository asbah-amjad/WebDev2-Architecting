const Order = require("../models/order");

function getAllOrders() {
  return Order.find({})
    .then((orders) => orders)
}

function getOrderById(orderId) {
  return Order.findById(orderId)
    .then((order) => order)
}

function deleteOrderById(orderId) {
  return Order.findByIdAndRemove(orderId)
    .then((order) => order)
}

function addOrder(order) {
  return Order.create(order)
    .then((order) => order)
}

function updateOrder(order) {
  const query = { "_id": order["_id"] }
  const update = { status: order.status }
  return Order.findOneAndUpdate(query, { $set: update })
    .then((order) => order)
}


module.exports = { getAllOrders, getOrderById, deleteOrderById, addOrder, updateOrder }

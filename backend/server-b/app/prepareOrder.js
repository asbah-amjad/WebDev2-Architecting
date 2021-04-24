/** Emulates sandwich preparation.  */
module.exports.prepareOrder = (order) => {
    console.log("Server B: Preparing sandwich...")
    console.log("Server B: Warming up bread...")
    //console.log(" [x] Task takes %d seconds", secs);
    setTimeout(() => handleSandwichReady(order), 10000);
}

const handleSandwichReady = (order) => {
    console.log(new Date(), " [x] Done");
    // TODO: send back to queue
}

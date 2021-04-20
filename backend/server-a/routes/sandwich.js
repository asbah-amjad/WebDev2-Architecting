const express = require("express");
const router = express.Router();

// const rabbitHost = "rabbitmq:5672";
// const rabbitTaskSender = require("../rabbit-utils/sendTask")
// const sandwichGenerationQueue = "sandwichGenerationQueue";

const sandwichService = require("../services/sandwich.js");
const testData = require('../data/sandwich');
sandwichService.resetSandwich(testData)
/* GET sandwich by id. */
router.get("/:sandwichId", async function (req, res) {
    const sandwichId = req.params.sandwichId;
    try {
        const sandwich = await sandwichService.getSandwichById(sandwichId);
        res.json(sandwich);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

/* GET all sandwichs. */
router.get("/", async function (req, res) {
    try {
        const sandwiches = await sandwichService.getAllSandwiches();
        res.json(sandwiches);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

/* load test sandwich. */
router.post("/reset", async function (req, res) {

    const newSandwich = testData;
    try {
        const sandwich = await sandwichService.resetSandwich(newSandwich);
        res.json(sandwich);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

/* POST update sandwich by id. */
router.post("/:sandwichId", async function (req, res) {
    const sandwichId = req.params.sandwichId;
    const newSandwich = req.body;
    try {
        const sandwich = await sandwichService.updateSandwich(sandwichId, newSandwich);
        res.json(sandwich);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});


/* Post a sandwich. */
router.post("/", async function (req, res) {
    const newSandwich = req.body;
    try {
        const sandwich = await sandwichService.addSandwich(newSandwich);
        res.json(sandwich);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});


/* DELETE sandwich by id. */
router.delete("/:sandwichId", async function (req, res) {
    const sandwichId = req.params.sandwichId;
    try {
        const sandwich = await sandwichService.deleteSandwichById(sandwichId);
        res.json(sandwich);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
});

module.exports = router;

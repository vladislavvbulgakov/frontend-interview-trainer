const express = require("express");
const router = express.Router({ mergeParams: true });

const controller = require("./topics.controller");

router.get("/", controller.getTopics);

module.exports = router;

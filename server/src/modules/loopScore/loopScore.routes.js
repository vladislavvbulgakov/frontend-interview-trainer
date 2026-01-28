const express = require("express");
const router = express.Router({ mergeParams: true });

const loopScoreController = require("./loopScore.controller");

router.get("/", loopScoreController.getLoopScore);

module.exports = router;

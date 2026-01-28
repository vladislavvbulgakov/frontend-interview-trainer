const express = require("express");
const router = express.Router({ mergeParams: true });

const interviewController = require("./interview.controller");

router.post("/", interviewController.startInterview);
router.post("/:id/complete", interviewController.completeInterview);
router.get("/:interviewId", interviewController.getInterview);

module.exports = router;

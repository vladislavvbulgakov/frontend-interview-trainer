const express = require("express");
const router = express.Router({ mergeParams: true });

const interviewQuestionController = require("./interviewQuestion.controller");

router.get(
    "/interview-stages/:stageId/questions",
    interviewQuestionController.getStageQuestions
);
router.post(
    "/interview-questions/:id/answer-technical",
    interviewQuestionController.submitTechnicalAnswer
);

router.post(
    "/interview-questions/:id/answer-hr",
    interviewQuestionController.submitHrAnswer
);
module.exports = router;

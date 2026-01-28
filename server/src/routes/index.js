const express = require("express");
const router = express.Router({ mergeParams: true });

const userRoutes = require("../modules/user/user.routes");
const interviewRoutes = require("../modules/interview/interview.routes");
const interviewQuestionRoutes = require("../modules/interviewQuestion/interviewQuestion.routes");
const questionsRoutes = require("../modules/questions/questions.routes");
const topicsRoutes = require("../modules/topics/topics.routes");
const loopScoreRoutes = require("../modules/loopScore/loopScore.routes");

router.use("/users", userRoutes);
router.use("/interviews", interviewRoutes);
router.use(interviewQuestionRoutes);
router.use("/questions", questionsRoutes);
router.use("/topics", topicsRoutes);
router.use("/loop-score", loopScoreRoutes);
module.exports = router;

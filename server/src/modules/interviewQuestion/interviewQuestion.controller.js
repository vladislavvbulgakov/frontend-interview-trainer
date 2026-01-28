const interviewQuestionService = require("./interviewQuestion.service");
async function getStageQuestions(req, res) {
    try {
        const { stageId } = req.params;

        const questions = await interviewQuestionService.getStageQuestions(
            stageId
        );

        return res.json(questions);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

async function submitTechnicalAnswer(req, res) {
    try {
        const { id } = req.params;
        const { confidenceAnswer } = req.body;

        if (!confidenceAnswer) {
            return res.status(400).json({
                message: "confidenceAnswer is required",
            });
        }

        const result = await interviewQuestionService.submitTechnicalAnswer({
            interviewQuestionId: id,
            confidenceAnswer,
        });

        return res.json(result);
    } catch (err) {
        if (err.message === "INTERVIEW_QUESTION_NOT_FOUND") {
            return res.status(404).json({ message: "Question not found" });
        }

        if (err.message === "QUESTION_ALREADY_ANSWERED") {
            return res
                .status(409)
                .json({ message: "Question already answered" });
        }

        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function submitHrAnswer(req, res) {
    try {
        const { id } = req.params;
        const { optionId } = req.body;

        if (!optionId) {
            return res.status(400).json({
                message: "optionId is required",
            });
        }

        const result = await interviewQuestionService.submitHrAnswer({
            interviewQuestionId: id,
            optionId,
        });

        return res.json(result);
    } catch (err) {
        if (err.message === "INTERVIEW_QUESTION_NOT_FOUND") {
            return res.status(404).json({ message: "Question not found" });
        }

        if (err.message === "QUESTION_ALREADY_ANSWERED") {
            return res
                .status(409)
                .json({ message: "Question already answered" });
        }

        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getStageQuestions,
    submitTechnicalAnswer,
    submitHrAnswer,
};

const interviewService = require("./interview.service");

async function startInterview(req, res) {
    try {
        const { userId, type } = req.body;

        if (!userId || !type) {
            return res.status(400).json({
                message: "Missing required fields",
            });
        }

        const interview = await interviewService.startInterview({
            userId,
            type,
        });

        return res.status(201).json(interview);
    } catch (err) {
        if (err.message === "ACTIVE_INTERVIEW_EXISTS") {
            return res.status(409).json({
                message: "Active interview already exists",
            });
        }

        if (err.message === "USER_NOT_FOUND") {
            return res.status(404).json({
                message: "User not found",
            });
        }

        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

async function getInterview(req, res) {
    try {
        const { interviewId } = req.params;

        const interview = await interviewService.getInterview(interviewId);

        return res.json(interview);
    } catch (err) {
        if (err.message === "INTERVIEW_NOT_FOUND") {
            return res.status(404).json({
                message: "Interview not found",
            });
        }

        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}
async function completeInterview(req, res) {
    try {
        const { id } = req.params;
        const { interview, result } = await interviewService.completeInterview(
            id
        );

        return res.json({
            interviewId: interview.id,
            status: interview.status,
            completedAt: interview.completed_at,
            result: {
                overallScore: result.overall_score,
                decision: result.decision,
                breakdownByStage: result.breakdown_by_stage,
                breakdownByTopic: result.breakdown_by_topic,
            },
        });
    } catch (err) {
        if (err.message === "INTERVIEW_NOT_FOUND")
            return res.status(404).json({ message: "Interview not found" });
        if (err.message === "INTERVIEW_NOT_IN_PROGRESS")
            return res
                .status(409)
                .json({ message: "Interview is not in progress" });
        if (err.message === "INTERVIEW_HAS_NO_QUESTIONS")
            return res
                .status(400)
                .json({ message: "Interview has no questions" });
        if (err.message === "INTERVIEW_HAS_UNANSWERED_QUESTIONS")
            return res
                .status(400)
                .json({ message: "Not all questions are answered" });

        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    startInterview,
    getInterview,
    completeInterview,
};

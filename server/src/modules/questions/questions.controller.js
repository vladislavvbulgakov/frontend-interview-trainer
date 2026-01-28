const questionsService = require("./questions.service");

async function getQuestions(req, res) {
    try {
        const userId = req.user.id;

        const {
            type,
            topicId,
            topicIds,
            confidence_lt,
            grade,
            answerStatus,
            limit,
            offset,
            search,
        } = req.query;
        // нормализация topicIds
        let parsedTopicIds = undefined;

        if (topicId) {
            parsedTopicIds = [topicId];
        } else if (topicIds) {
            parsedTopicIds = Array.isArray(topicIds) ? topicIds : [topicIds];
        }
        const result = await questionsService.getQuestionsForUser({
            userId,
            type,
            topicIds: parsedTopicIds,
            confidenceLt:
                confidence_lt !== undefined ? Number(confidence_lt) : undefined,
            grade,
            answerStatus,
            search,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
        });

        return res.json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    getQuestions,
};

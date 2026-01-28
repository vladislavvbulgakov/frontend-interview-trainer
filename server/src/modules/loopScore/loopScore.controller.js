const loopScoreReadService = require("./loopScore.read.service");

async function getLoopScore(req, res) {
    try {
        const { userId, grade } = req.query;

        if (!userId || !grade) {
            return res.status(400).json({
                message: "userId and grade are required",
            });
        }

        const result = await loopScoreReadService.getLoopScore({
            userId,
            grade,
        });

        if (!result) {
            return res.status(404).json({
                message: "LoopScore not found",
            });
        }

        return res.json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    getLoopScore,
};

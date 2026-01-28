const topicsService = require("./topics.service");

async function getTopics(req, res) {
    try {
        const result = await topicsService.getTopics();
        return res.json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    getTopics,
};

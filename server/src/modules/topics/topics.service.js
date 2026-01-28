const topicRepository = require("../../db/repositories/topic.repository");

async function getTopics() {
    const rows = await topicRepository.getAllTopics();
    const result = rows.map((r) => ({
        id: r.id,
        name: r.name,
        type: r.type,
    }));
    return result;
}

module.exports = {
    getTopics,
};

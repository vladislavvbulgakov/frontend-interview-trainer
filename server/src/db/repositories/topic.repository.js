const { query } = require("../index");

async function getAllTopics() {
    const sql = `
    SELECT id, name, type
    FROM topics
    ORDER BY name
  `;

    const { rows } = await query(sql);
    return rows;
}

module.exports = {
    getAllTopics,
};

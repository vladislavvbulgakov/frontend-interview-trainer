const { query } = require("../index");

async function createStage({ interviewId, stageType, order }) {
    const sql = `
    INSERT INTO interview_stages (interview_id, stage_type, stage_order)
    VALUES ($1, $2, $3)
    RETURNING *
  `;

    const { rows } = await query(sql, [interviewId, stageType, order]);

    return rows[0];
}

async function getStagesByInterview(interviewId) {
    const sql = `
    SELECT *
    FROM interview_stages
    WHERE interview_id = $1
    ORDER BY stage_order
  `;

    const { rows } = await query(sql, [interviewId]);
    return rows;
}

module.exports = {
    createStage,
    getStagesByInterview,
};

const { query } = require("../index");

async function createInterviewResult({
    interviewId,
    overallScore,
    decision,
    breakdownByStage,
    breakdownByTopic,
}) {
    const sql = `
    INSERT INTO interview_results (
      interview_id,
      overall_score,
      decision,
      breakdown_by_stage,
      breakdown_by_topic
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
    const { rows } = await query(sql, [
        interviewId,
        overallScore,
        decision,
        breakdownByStage,
        breakdownByTopic,
    ]);
    return rows[0];
}

module.exports = {
    createInterviewResult,
};

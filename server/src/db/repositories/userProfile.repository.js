const { query } = require("../index");

async function getCompletedInterviewsByUser(userId) {
    const sql = `
    SELECT
      i.id                AS interview_id,
      i.type              AS interview_type,
      i.completed_at,

      r.overall_score,
      r.decision,
      r.breakdown_by_stage,
      r.breakdown_by_topic
    FROM interviews i
    JOIN interview_results r
      ON r.interview_id = i.id
    WHERE i.user_id = $1
      AND i.status = 'COMPLETED'
    ORDER BY i.completed_at DESC
  `;

    const { rows } = await query(sql, [userId]);
    return rows;
}

module.exports = {
    getCompletedInterviewsByUser,
};

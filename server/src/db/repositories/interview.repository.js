const { query } = require("../index");

async function createInterview({ userId, type, gradeSnapshot }) {
    const sql = `
    INSERT INTO interviews (user_id, type, grade_snapshot, status, started_at)
    VALUES ($1, $2, $3, 'IN_PROGRESS', now())
    RETURNING *
  `;

    const { rows } = await query(sql, [userId, type, gradeSnapshot]);

    return rows[0];
}

async function getActiveInterviewByUser(userId) {
    const sql = `
    SELECT *
    FROM interviews
    WHERE user_id = $1
      AND status = 'IN_PROGRESS'
    LIMIT 1
  `;

    const { rows } = await query(sql, [userId]);
    return rows[0] || null;
}

async function getInterviewById(interviewId) {
    const sql = `
    SELECT *
    FROM interviews
    WHERE id = $1
  `;

    const { rows } = await query(sql, [interviewId]);
    return rows[0] || null;
}

async function completeInterview(interviewId) {
    const sql = `
    UPDATE interviews
    SET status = 'COMPLETED',
        completed_at = now()
    WHERE id = $1
      AND status = 'IN_PROGRESS'
    RETURNING *
  `;

    const { rows } = await query(sql, [interviewId]);
    return rows[0] || null;
}
async function getLastCompletedInterviews(userId, limit) {
    const sql = `
    SELECT
      id,
      type
    FROM interviews
    WHERE user_id = $1
      AND status = 'COMPLETED'
    ORDER BY completed_at DESC
    LIMIT $2
  `;

    const { rows } = await query(sql, [userId, limit]);
    return rows;
}
module.exports = {
    createInterview,
    getActiveInterviewByUser,
    getInterviewById,
    completeInterview,
    getLastCompletedInterviews,
};

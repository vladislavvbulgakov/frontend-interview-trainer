const { query } = require("../index");

async function upsertLoopScore({ userId, grade, value, breakdown }) {
    const sql = `
    INSERT INTO loop_scores (
      user_id,
      grade,
      value,
      breakdown,
      calculated_at
    )
    VALUES ($1, $2, $3, $4, now())
    ON CONFLICT (user_id, grade)
    DO UPDATE SET
      value = EXCLUDED.value,
      breakdown = EXCLUDED.breakdown,
      calculated_at = now()
  `;

    await query(sql, [userId, grade, value, breakdown]);
}
async function getLoopScore(userId, grade) {
    const sql = `
    SELECT
      user_id,
      grade,
      value,
      breakdown,
      calculated_at
    FROM loop_scores
    WHERE user_id = $1
      AND grade = $2
  `;

    const { rows } = await query(sql, [userId, grade]);
    return rows[0] || null;
}
module.exports = {
    upsertLoopScore,
    getLoopScore,
};

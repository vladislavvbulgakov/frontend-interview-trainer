const { query } = require("../index");

async function upsertUserQuestionStat({
    userId,
    questionId,
    lastAnswer,
    confidenceScore,
}) {
    const sql = `
    INSERT INTO user_question_stats (
      user_id,
      question_id,
      last_answer,
      confidence_score,
      updated_at
    )
    VALUES ($1, $2, $3, $4, now())
    ON CONFLICT (user_id, question_id)
    DO UPDATE SET
      last_answer = EXCLUDED.last_answer,
      confidence_score = EXCLUDED.confidence_score,
      updated_at = now()
    RETURNING *
  `;

    const { rows } = await query(sql, [
        userId,
        questionId,
        lastAnswer,
        confidenceScore,
    ]);

    return rows[0];
}

async function getStatsByGrade(userId, grade) {
    const sql = `
    SELECT
      uqs.confidence_score,
      q.id         AS question_id,
      q.grade,
      q.type,
      t.name       AS topic_name
    FROM user_question_stats uqs
    JOIN questions q
      ON q.id = uqs.question_id
    JOIN topics t
      ON t.id = q.topic_id
    WHERE uqs.user_id = $1
      AND q.grade = $2
      AND q.type = 'TECHNICAL'
  `;

    const { rows } = await query(sql, [userId, grade]);
    return rows;
}
module.exports = {
    upsertUserQuestionStat,
    getStatsByGrade,
};

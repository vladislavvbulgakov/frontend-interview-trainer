const { query } = require("../index");

async function createInterviewQuestion({ interviewId, stageId, questionId }) {
    const sql = `
    INSERT INTO interview_question (
      interview_stage_id,
      question_id
    )
    VALUES ($1, $2)
  `;

    await query(sql, [stageId, questionId]);
}

async function getQuestionsByStage(interviewStageId) {
    const sql = `
    SELECT iq.*, q.content, q.type, q.topic
    FROM interview_question iq
    JOIN questions q ON q.id = iq.question_id
    WHERE iq.interview_stage_id = $1
    ORDER BY iq.id
  `;

    const { rows } = await query(sql, [interviewStageId]);
    return rows;
}

async function getInterviewQuestionById(id) {
    const sql = `
    SELECT *
    FROM interview_question
    WHERE id = $1
  `;

    const { rows } = await query(sql, [id]);
    return rows[0] || null;
}

async function submitTechnicalAnswer({ id, confidenceAnswer }) {
    const sql = `
    UPDATE interview_question
    SET confidence_answer = $1,
        answered_at = now()
    WHERE id = $2
      AND answered_at IS NULL
    RETURNING *
  `;

    const { rows } = await query(sql, [confidenceAnswer, id]);
    return rows[0] || null;
}

async function submitHrAnswer({ id, optionId }) {
    const sql = `
    UPDATE interview_question
    SET selected_option_id = $1,
        answered_at = now()
    WHERE id = $2
      AND answered_at IS NULL
    RETURNING *
  `;

    const { rows } = await query(sql, [optionId, id]);
    return rows[0] || null;
}

async function getInterviewById(id) {
    const sql = `
    SELECT *
    FROM interviews
    WHERE id = $1
  `;
    const { rows } = await query(sql, [id]);
    return rows[0] || null;
}

async function hasUnansweredQuestions(interviewId) {
    const sql = `
    SELECT
      COUNT(*) FILTER (WHERE iq.answered_at IS NULL) AS unanswered_count,
      COUNT(*) AS total_count
    FROM interview_question iq
    JOIN interview_stages s ON s.id = iq.interview_stage_id
    WHERE s.interview_id = $1
  `;

    const { rows } = await query(sql, [interviewId]);

    const { unanswered_count, total_count } = rows[0];

    return {
        total: Number(total_count),
        unanswered: Number(unanswered_count),
    };
}
async function getAnswersForInterview(interviewId) {
    const sql = `
    SELECT
    iq.confidence_answer,
    q.type AS question_type,
    q.id   AS question_id,

    q.topic_id,
    t.name AS topic_name,

    s.stage_type
    FROM interview_question iq
    JOIN interview_stages s ON s.id = iq.interview_stage_id
    JOIN questions q ON q.id = iq.question_id
    JOIN topics t ON t.id = q.topic_id
    WHERE s.interview_id = $1;
  `;
    const { rows } = await query(sql, [interviewId]);
    return rows;
}

module.exports = {
    createInterviewQuestion,
    getQuestionsByStage,
    getInterviewQuestionById,
    submitTechnicalAnswer,
    submitHrAnswer,
    getInterviewById,
    hasUnansweredQuestions,
    getAnswersForInterview,
};

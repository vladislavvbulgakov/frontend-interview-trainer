const { query } = require("../index");

async function getRandomQuestions({ type, grade, limit }) {
    const sql = `
    SELECT *
    FROM questions
    WHERE type = $1
      AND grade = $2
    ORDER BY random()
    LIMIT $3
  `;

    const { rows } = await query(sql, [type, grade, limit]);
    return rows;
}

async function getRandomTechnicalQuestions({ grade, topicIds, limit }) {
    const params = [grade];
    let idx = 2;

    let topicFilter = "";
    if (topicIds?.length) {
        topicFilter = `AND topic_id = ANY($${idx++})`;
        params.push(topicIds);
    }

    const sql = `
    SELECT id
    FROM questions
    WHERE type = 'TECHNICAL'
      AND grade = $1
      ${topicFilter}
    ORDER BY random()
    LIMIT ${limit}
  `;

    const { rows } = await query(sql, params);
    return rows.map((r) => r.id);
}

async function getRandomHrQuestions({ grade, limit }) {
    const sql = `
    SELECT id
    FROM questions
    WHERE type = 'HR'
      AND grade = $1
    ORDER BY random()
    LIMIT $2
  `;

    const { rows } = await query(sql, [grade, limit]);
    return rows.map((r) => r.id);
}

async function getQuestionsWithUserStatus({
    userId,
    type,
    grade,
    topicIds,
    confidenceLt,
    answerStatus,
    search,
    limit = 50,
    offset = 0,
}) {
    const params = [userId];
    let idx = 2;
    const conditions = [];

    if (type) {
        conditions.push(`t.type = $${idx++}`);
        params.push(type);
    }

    if (grade) {
        conditions.push(`q.grade = $${idx++}`);
        params.push(grade);
    }

    if (topicIds?.length) {
        conditions.push(`q.topic_id = ANY($${idx++}::uuid[])`);
        params.push(topicIds);
    }

    if (confidenceLt !== undefined) {
        conditions.push(`COALESCE(uqs.confidence_score, 0) < $${idx++}`);
        params.push(confidenceLt);
    }
    if (answerStatus) {
        if (answerStatus === "NOT_ANSWERED") {
            conditions.push(`uqs.last_answer IS NULL`);
        } else {
            conditions.push(`uqs.last_answer = $${idx++}`);
            params.push(answerStatus);
        }
    }
    if (search && search.trim().length >= 2) {
        conditions.push(`q.content ILIKE $${idx++}`);
        params.push(`%${search.trim()}%`);
    }
    const whereSql = conditions.length ? `AND ${conditions.join(" AND ")}` : "";

    const limitIdx = idx++;
    const offsetIdx = idx++;

    const sql = `
    SELECT
      q.id AS question_id,
      q.type,
      q.grade,
      q.difficulty,
      q.content,
      q.reference_answer,

      t.id   AS topic_id,
      t.name AS topic_name,

      uqs.last_answer,
      uqs.confidence_score,

      COUNT(*) OVER() AS total
    FROM questions q
    JOIN topics t ON t.id = q.topic_id
    LEFT JOIN user_question_stats uqs
      ON uqs.question_id = q.id
     AND uqs.user_id = $1
    WHERE 1 = 1
    ${whereSql}
    ORDER BY COALESCE(uqs.confidence_score, 0) ASC
    LIMIT $${limitIdx}
    OFFSET $${offsetIdx}
  `;

    params.push(limit, offset);

    const { rows } = await query(sql, params);

    const total = rows.length ? Number(rows[0].total) : 0;

    return {
        items: rows.map(({ total, ...q }) => q),
        total,
        limit,
        offset,
    };
}

module.exports = {
    getQuestionsWithUserStatus,
    getRandomQuestions,
    getRandomTechnicalQuestions,
    getRandomHrQuestions,
};

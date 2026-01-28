const questionRepository = require("../../db/repositories/question.repository");

async function getQuestionsForUser({
    userId,
    type,
    topicIds,
    confidenceLt,
    grade,
    answerStatus,
    search,
    limit,
    offset,
}) {
    const {
        items,
        total,
        limit: resolvedLimit,
        offset: resolvedOffset,
    } = await questionRepository.getQuestionsWithUserStatus({
        userId,
        type,
        topicIds,
        confidenceLt,
        answerStatus,
        limit,
        offset,
        grade,
        search,
    });

    const mappedItems = items.map((r) => ({
        questionId: r.question_id,
        type: r.type,
        grade: r.grade,
        topic: {
            id: r.topic_id,
            name: r.topic_name,
        },
        difficulty: r.difficulty,
        content: r.content,
        hrHint: r.type === "HR" ? r.hr_hint : null,
        referenceAnswer: r.type === "TECHNICAL" ? r.reference_answer : null,
        userStatus: {
            lastAnswer: r.last_answer ?? "NOT_ANSWERED",
            confidenceScore: r.confidence_score ?? 0,
        },
    }));

    return {
        items: mappedItems,
        meta: {
            total,
            limit: resolvedLimit,
            offset: resolvedOffset,
        },
    };
}

module.exports = {
    getQuestionsForUser,
};

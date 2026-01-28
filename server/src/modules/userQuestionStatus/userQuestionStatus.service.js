const interviewQuestionRepository = require("../../db/repositories/interviewQuestion.repository");
const interviewRepository = require("../../db/repositories/interview.repository");
const userQuestionStatRepository = require("../../db/repositories/userQuestionStat.repository");

function answerToValue(answer) {
    switch (answer) {
        case "CONFIDENT":
            return 1;
        case "DOUBT":
            return 0.5;
        case "DONT_KNOW":
            return 0;
        default:
            return null;
    }
}

function recalcConfidenceScore(previousScore, answerValue) {
    const ALPHA = 0.7; // вес прошлого знания

    // первый контакт с вопросом
    if (previousScore === null || previousScore === undefined) {
        return answerValue;
    }

    return previousScore * ALPHA + answerValue * (1 - ALPHA);
}

// 1. Получаем интервью
// 2. Получаем все ответы интервью
// 3. Обрабатываем ТОЛЬКО technical-вопросы
// 4. Получаем текущий UserQuestionStat (если есть)
// 5. Пересчитываем confidence_score
// 6. Upsert статуса
async function updateUserQuestionStats(interviewId) {
    const interview = await interviewRepository.getInterviewById(interviewId);
    if (!interview) {
        throw new Error("INTERVIEW_NOT_FOUND");
    }
    const answers = await interviewQuestionRepository.getAnswersForInterview(
        interviewId
    );

    for (const answer of answers) {
        if (answer.question_type !== "TECHNICAL") continue;

        const answerValue = answerToValue(answer.confidence_answer);
        if (answerValue === null) continue;

        const existing = await userQuestionStatRepository.getUserQuestionStat(
            interview.user_id,
            answer.question_id
        );

        const newConfidenceScore = recalcConfidenceScore(
            existing?.confidence_score ?? null,
            answerValue
        );

        await userQuestionStatRepository.upsertUserQuestionStat({
            userId: interview.user_id,
            questionId: answer.question_id,
            lastAnswer: answer.confidence_answer,
            confidenceScore: newConfidenceScore,
        });
    }
}

module.exports = {
    updateUserQuestionStats,
};

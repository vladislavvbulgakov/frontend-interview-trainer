const interviewQuestionRepository = require("../../db/repositories/interviewQuestion.repository");
const questionRepository = require("../../db/repositories/question.repository");
// 1. Выбираем случайные вопросы
// 2. Привязываем каждый вопрос к этапу
async function generateQuestionsForStage({
    interviewStageId,
    stageType,
    grade,
}) {
    const questions = await questionRepository.getRandomQuestions({
        type: stageType,
        grade,
        limit: stageType === "HR" ? 5 : 7,
    });

    const interviewQuestions = [];

    for (const question of questions) {
        const iq = await interviewQuestionRepository.createInterviewQuestion({
            interviewStageId,
            questionId: question.id,
        });

        interviewQuestions.push(iq);
    }

    return interviewQuestions;
}

async function getStageQuestions(interviewStageId) {
    return interviewQuestionRepository.getQuestionsByStage(interviewStageId);
}

async function submitTechnicalAnswer({
    interviewQuestionId,
    confidenceAnswer,
}) {
    const iq = await interviewQuestionRepository.getInterviewQuestionById(
        interviewQuestionId
    );

    if (!iq) {
        throw new Error("INTERVIEW_QUESTION_NOT_FOUND");
    }

    if (iq.answered_at) {
        throw new Error("QUESTION_ALREADY_ANSWERED");
    }

    const updated = await interviewQuestionRepository.submitTechnicalAnswer({
        id: interviewQuestionId,
        confidenceAnswer,
    });

    if (!updated) {
        throw new Error("ANSWER_SUBMIT_FAILED");
    }

    return updated;
}

async function submitHrAnswer({ interviewQuestionId, optionId }) {
    const iq = await interviewQuestionRepository.getInterviewQuestionById(
        interviewQuestionId
    );

    if (!iq) {
        throw new Error("INTERVIEW_QUESTION_NOT_FOUND");
    }

    if (iq.answered_at) {
        throw new Error("QUESTION_ALREADY_ANSWERED");
    }

    const updated = await interviewQuestionRepository.submitHrAnswer({
        id: interviewQuestionId,
        optionId,
    });

    if (!updated) {
        throw new Error("ANSWER_SUBMIT_FAILED");
    }

    return updated;
}
async function generateQuestionsForInterview({
    interviewId,
    stageId,
    stageType,
    grade,
    topicIds,
    limit,
}) {
    let questionIds = [];

    if (stageType === "TECHNICAL") {
        questionIds = await questionRepository.getRandomTechnicalQuestions({
            grade,
            topicIds,
            limit,
        });
    }

    if (stageType === "HR") {
        questionIds = await questionRepository.getRandomHrQuestions({
            grade,
            limit,
        });
    }

    if (!questionIds.length) {
        throw new Error("NO_QUESTIONS_FOUND");
    }

    for (const questionId of questionIds) {
        await interviewQuestionRepository.createInterviewQuestion({
            interviewId,
            stageId,
            questionId,
        });
    }
}
module.exports = {
    generateQuestionsForStage,
    getStageQuestions,
    submitTechnicalAnswer,
    submitHrAnswer,
    generateQuestionsForInterview,
};

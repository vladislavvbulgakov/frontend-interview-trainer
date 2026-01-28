const interviewRepository = require("../../db/repositories/interview.repository");
const interviewStageRepository = require("../../db/repositories/interviewStage.repository");
const userRepository = require("../../db/repositories/user.repository");
const interviewQuestionRepository = require("../../db/repositories/interviewQuestion.repository");
const interviewResultRepository = require("../../db/repositories/interviewResult.repository");
const interviewResultService = require("../interviewResult/interviewResult.service");
const userQuestionStatusService = require("../userQuestionStatus/userQuestionStatus.service");
const interviewQuestionService = require("../interviewQuestion/interviewQuestion.service");
// 1. Создаём интервью
// 2. Создаём этапы интервью
// 3. Генерируем вопросы по этапам
async function startInterview({
    userId,
    interviewType, // FULL | TECHNICAL | HR
    grade,
    topics,
}) {
    const interview = await interviewRepository.createInterview({
        userId,
        type: interviewType,
    });

    const stages = await createStagesForInterview({
        interviewId: interview.id,
        interviewType,
    });

    for (const stage of stages) {
        await interviewQuestionService.generateQuestionsForInterview({
            interviewId: interview.id,
            stageId: stage.id,
            stageType: stage.stage_type,
            grade,
            topics,
            limit: stage.stage_type === "TECHNICAL" ? 10 : 5,
        });
    }

    return interview;
}

async function getInterview(interviewId) {
    const interview = await interviewRepository.getInterviewById(interviewId);

    if (!interview) {
        throw new Error("INTERVIEW_NOT_FOUND");
    }

    return interview;
}

async function createStagesForInterview(interviewId, interviewType) {
    if (interviewType === "HR") {
        await interviewStageRepository.createStage({
            interviewId,
            stageType: "HR",
            order: 1,
        });
    }

    if (interviewType === "TECHNICAL") {
        await interviewStageRepository.createStage({
            interviewId,
            stageType: "TECHNICAL",
            order: 1,
        });
    }

    if (interviewType === "FULL") {
        await interviewStageRepository.createStage({
            interviewId,
            stageType: "HR",
            order: 1,
        });

        await interviewStageRepository.createStage({
            interviewId,
            stageType: "TECHNICAL",
            order: 2,
        });
    }
}
// 1. Проверяем интервью
// 2. Проверяем, что все вопросы отвечены
// 3. считаем результат
// 4. сохраняем snapshot
// 5. Завершаем интервью
async function completeInterview(interviewId) {
    const interview = await interviewRepository.getInterviewById(interviewId);

    if (!interview) {
        throw new Error("INTERVIEW_NOT_FOUND");
    }

    if (interview.status !== "IN_PROGRESS") {
        throw new Error("INTERVIEW_NOT_IN_PROGRESS");
    }

    const stats = await interviewQuestionRepository.hasUnansweredQuestions(
        interviewId
    );

    if (stats.total === 0) {
        throw new Error("INTERVIEW_HAS_NO_QUESTIONS");
    }

    if (stats.unanswered > 0) {
        throw new Error("INTERVIEW_HAS_UNANSWERED_QUESTIONS");
    }
    const result = await interviewResultService.calculateResult(interviewId);

    const savedResult = await interviewResultRepository.createInterviewResult({
        interviewId,
        overallScore: result.overallScore,
        decision: result.decision,
        breakdownByStage: result.breakdownByStage,
        breakdownByTopic: result.breakdownByTopic,
    });
    await userQuestionStatusService.updateUserQuestionStats(interviewId);
    await loopScoreService.recalculateLoopScore({
        userId: interview.user_id,
        grade: interview.grade,
    });
    const completed = await interviewRepository.completeInterview(interviewId);
    if (!completed) {
        throw new Error("INTERVIEW_NOT_IN_PROGRESS");
    }

    return completed;
}

module.exports = {
    startInterview,
    getInterview,
    completeInterview,
};

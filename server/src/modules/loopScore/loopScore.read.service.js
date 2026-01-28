const loopScoreRepository = require("../../db/repositories/loopScore.repository");

async function getLoopScore({ userId, grade }) {
    const score = await loopScoreRepository.getLoopScore(userId, grade);

    if (!score) {
        return null;
    }

    return {
        userId: score.user_id,
        grade: score.grade,
        value: score.value,
        breakdown: score.breakdown,
        calculatedAt: score.calculated_at,
    };
}

module.exports = {
    getLoopScore,
};

const interviewRepository = require("../../db/repositories/interview.repository");
const userQuestionStatRepository = require("../../db/repositories/userQuestionStat.repository");
const loopScoreRepository = require("../../db/repositories/loopScore.repository");
const topicRepository = require("../../db/repositories/topic.repository");

const {
    LAST_N_INTERVIEWS,
    DIFFICULTY_FACTOR,
    WEIGHTS,
} = require("../../shared/constants/loopScore.constanst");

async function recalculateLoopScore({ userId, grade }) {
    // ---------- 1. Interview consistency ----------
    const interviews = await interviewRepository.getLastCompletedInterviews(
        userId,
        LAST_N_INTERVIEWS
    );

    let full = 0;
    let hrOnly = 0;
    let technicalOnly = 0;

    for (const i of interviews) {
        if (i.type === "FULL") full++;
        else if (i.type === "HR") hrOnly++;
        else if (i.type === "TECHNICAL") technicalOnly++;
    }

    const consistencyScore =
        (full * 1 + hrOnly * 0.3 + technicalOnly * 0.3) /
        Math.max(interviews.length, 1);

    // ---------- 2. Completeness ----------
    const hasHR = full > 0 || hrOnly > 0;
    const hasTechnical = full > 0 || technicalOnly > 0;

    let completenessCoverage = 0;
    if (hasHR && hasTechnical) completenessCoverage = 1;
    else if (hasHR || hasTechnical) completenessCoverage = 0.6;

    // ---------- 3. Stability ----------
    const stats = await userQuestionStatRepository.getStatsByGrade(
        userId,
        grade
    );

    let sumConfidence = 0;
    const weakTopicsMap = {};

    for (const s of stats) {
        sumConfidence += s.confidence_score;

        if (s.confidence_score < 0.6) {
            weakTopicsMap[s.topic_name] = true;
        }
    }

    const averageConfidence =
        stats.length > 0 ? sumConfidence / stats.length : 0;

    const weakTopics = Object.keys(weakTopicsMap);

    // ---------- 4. Final score ----------
    const rawScore =
        WEIGHTS.COMPLETENESS * completenessCoverage +
        WEIGHTS.STABILITY * averageConfidence +
        WEIGHTS.CONSISTENCY * consistencyScore;

    const difficultyFactor = DIFFICULTY_FACTOR[grade] ?? 1;

    const value = Math.round(Math.min(rawScore / difficultyFactor, 1) * 100);

    // ---------- 5. Breakdown ----------
    const breakdown = {
        grade,
        completeness: {
            hr: hasHR,
            technical: hasTechnical,
            coverage: completenessCoverage,
        },
        stability: {
            average_confidence: Number(averageConfidence.toFixed(2)),
            weak_topics: weakTopics,
        },
        interviewConsistency: {
            lastN: LAST_N_INTERVIEWS,
            full,
            hrOnly,
            technicalOnly,
        },
        recommendations: buildRecommendations({
            hasHR,
            hasTechnical,
            full,
            weakTopics,
        }),
    };

    // ---------- 6. Persist ----------
    await loopScoreRepository.upsertLoopScore({
        userId,
        grade,
        value,
        breakdown,
    });

    return { value, breakdown };
}

/**
 * Рекомендации (простые, но полезные)
 */
function buildRecommendations({ hasHR, hasTechnical, full, weakTopics }) {
    const recs = [];

    if (!hasHR || !hasTechnical) {
        recs.push("Пройди FULL интервью");
    } else if (full < 2) {
        recs.push("Пройди ещё 2 FULL интервью");
    }

    if (weakTopics.length) {
        recs.push(`Повтори темы: ${weakTopics.join(", ")}`);
    }

    return recs;
}

module.exports = {
    recalculateLoopScore,
};

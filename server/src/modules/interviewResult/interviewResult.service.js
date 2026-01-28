const interviewQuestionRepo = require("../../db/repositories/interviewQuestion.repository");

function scoreTechnical(answer) {
    if (answer === "CONFIDENT") return 1;
    if (answer === "DOUBT") return 0.5;
    return 0; // DONT_KNOW or null
}

async function calculateResult(interviewId) {
    const rows = await interviewQuestionRepo.getAnswersForInterview(
        interviewId
    );

    if (!rows.length) {
        throw new Error("INTERVIEW_HAS_NO_QUESTIONS");
    }

    let total = 0;
    let max = 0;

    const byStage = {};
    const byTopic = {};

    for (const r of rows) {
        let value = 0;
        const maxValue = 1;

        if (r.question_type === "TECHNICAL") {
            value = scoreTechnical(r.confidence_answer);
        } else if (r.question_type === "HR") {
            value = Number(r.hr_weight ?? 0);
        }

        total += value;
        max += maxValue;

        // -------- breakdown by stage --------
        byStage[r.stage_type] ??= { sum: 0, max: 0 };
        byStage[r.stage_type].sum += value;
        byStage[r.stage_type].max += maxValue;

        // -------- breakdown by topic --------
        if (r.topic_id) {
            byTopic[r.topic_id] ??= {
                topicId: r.topic_id,
                topicName: r.topic_name,
                sum: 0,
                max: 0,
            };

            byTopic[r.topic_id].sum += value;
            byTopic[r.topic_id].max += maxValue;
        }
    }

    const overallScore = Math.round((total / Math.max(max, 1)) * 100);
    const decision = overallScore >= 70 ? "HIRE" : "NO_HIRE";

    const breakdownByStage = Object.fromEntries(
        Object.entries(byStage).map(([k, v]) => [
            k,
            Math.round((v.sum / v.max) * 100),
        ])
    );

    const breakdownByTopic = Object.fromEntries(
        Object.values(byTopic).map((t) => [
            t.topicName,
            Math.round((t.sum / t.max) * 100),
        ])
    );

    return {
        overallScore,
        decision,
        breakdownByStage,
        breakdownByTopic,
    };
}

module.exports = {
    calculateResult,
};

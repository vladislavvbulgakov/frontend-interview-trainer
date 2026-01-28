const userProfileRepository = require("../../db/repositories/userProfile.repository");

async function getUserProfile(userId) {
    const rows = await userProfileRepository.getCompletedInterviewsByUser(
        userId
    );

    return {
        userId,
        interviews: rows.map((row) => ({
            interviewId: row.interview_id,
            type: row.interview_type,
            completedAt: row.completed_at,
            result: {
                overallScore: row.overall_score,
                decision: row.decision,
                breakdownByStage: row.breakdown_by_stage,
                breakdownByTopic: row.breakdown_by_topic,
            },
        })),
    };
}

module.exports = {
    getUserProfile,
};

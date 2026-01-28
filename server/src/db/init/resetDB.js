const pool = require("../pool");

async function resetDB() {
    await pool.query(`
        TRUNCATE TABLE
            interview_results,
            interview_question,
            interview_stages,
            interviews,
            user_question_stats,
            questions,
            topics
        RESTART IDENTITY CASCADE
    `);

    console.log("✅ Database reset completed");
}

module.exports = resetDB;

const pool = require("../pool");
//questions
async function resetDB() {
    await pool.query(`
        TRUNCATE TABLE
            questions,
            topics
        RESTART IDENTITY CASCADE
    `);

    console.log("✅ Questions & Topics reset completed");
}

module.exports = resetDB;

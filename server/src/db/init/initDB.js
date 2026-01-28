const resetDB = require("./resetDB");

async function initDatabase() {
    if (process.env.DB_AUTO_SEED !== "true") {
        console.log("DB_AUTO_SEED disabled, skipping DB init");
        return;
    }

    // await resetDB();

    console.log("✅ Database initialized");
}

module.exports = initDatabase;

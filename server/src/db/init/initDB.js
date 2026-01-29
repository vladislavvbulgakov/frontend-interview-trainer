const path = require("path");
const fs = require("fs");
const pool = require("../pool");
const resetDB = require("./resetDB");

async function runSqlFile(filePath) {
    const sql = fs.readFileSync(filePath, "utf8");
    await pool.query(sql);
}

async function runSqlDirectory(dirPath) {
    const files = fs
        .readdirSync(dirPath)
        .filter((f) => f.endsWith(".sql"))
        .sort();

    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        await runSqlFile(fullPath);
    }
}

async function initDatabase() {
    if (process.env.DB_AUTO_SEED !== "true") {
        console.log("🛢 DB_AUTO_SEED disabled, skipping DB initialization");
        return;
    }

    await runSqlDirectory(path.join(__dirname, "../migrations"));

    if (process.env.DB_RESET === "true") {
        console.log("🛢 DB_RESET enabled — resetting data");
        await resetDB();
    }

    await runSqlDirectory(path.join(__dirname, "../seed"));
    await runSqlDirectory(path.join(__dirname, "../seed/questions/hr"));
    await runSqlDirectory(path.join(__dirname, "../seed/questions/technical"));
    console.log("✅ Database initialization completed");
}

module.exports = initDatabase;

require("dotenv").config();
const chalk = require("chalk").default;

const app = require("./app");
const initDatabase = require("./db/init/initDB");
const { pool } = require("./db");

const PORT = process.env.PORT || 3030;

async function start() {
    try {
        await pool.query("SELECT 1");
        console.log(chalk.blue("🛢 PostgreSQL connected"));

        await initDatabase();

        app.listen(PORT, () => {
            console.log(
                chalk.blue(`🚀 Server has been started on port ${PORT}...`),
            );
        });
    } catch (error) {
        console.error(chalk.red("❌ Failed to start server"), error);
        process.exit(1);
    }
}

start();

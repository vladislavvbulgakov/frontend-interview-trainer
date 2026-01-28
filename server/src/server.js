require("dotenv").config();
const chalk = require("chalk").default;
const app = require("./app");
const { pool } = require("./db");

const PORT = process.env.PORT || 3030;

async function start() {
    try {
        await pool.query("SELECT 1");
        console.log(chalk.blue("🛢 PostgreSQL connected"));
        app.listen(PORT, () => {
            console.log(
                chalk.blue(`🚀 Server has been started on port ${PORT}... `)
            );
        });
    } catch (error) {
        console.error(chalk.red("❌ Failed to connect to PostgreSQL"), error);
        process.exit(1);
    }
}
start();

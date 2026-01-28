const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mockAuth = require("./middlewares/mockAuth");

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(express.json());
app.use(mockAuth);
app.use("/api", routes);

module.exports = app;

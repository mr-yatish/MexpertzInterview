// Import packages
const express = require("express");
const cors = require("cors");

// Import utilities
const { database } = require("./utils");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Initialize database connection
database.mongooseConnection();

// START: Routes
const { userRouter, studentRouter, batch } = require("./routes");
app.use("/user", userRouter);
app.use("/student", studentRouter);
app.use("/batch", batch);
// END: Routes

module.exports = { app };

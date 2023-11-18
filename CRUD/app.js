require("dotenv").config();
const express = require("express");

const app = express();

const connectToDb = require("./config/db.js");

// database connection
connectToDb();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user routers
const userRoutes = require("./routes/userRoutes.js");

app.use("/", userRoutes);

module.exports = app;

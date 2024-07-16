const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectToDb = require("./config/db");
const cors = require("cors");

dotenv.config();

connectToDb();

const app = express();

// Allow requests from http://localhost:5173   , solved by chtgpt
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Listening on Port ${port}`));

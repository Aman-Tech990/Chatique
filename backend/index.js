import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";
import cors from "cors";

if (process.env.NODE_ENV !== "production") {
    dotenv.config({});
}

const app = express();
const port = process.env.PORT || 3005;

// CORS
app.use(cors({}));

// Middlewares
app.use(express.json());

// Database Connection
connectDB();

//APIs

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
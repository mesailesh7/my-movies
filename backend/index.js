import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

//Files
import connectDB from "./config/db.js";

//Configuration
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes

app.listen(PORT, () => {
  console.log("Server is running in Port", PORT);
});

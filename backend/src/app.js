import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import resumeRouter from "./routes/resume.routes.js";
const app = express();

//Middleware

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/resume", resumeRouter);
app.use("/uploads", express.static("uploads"));
export default app;
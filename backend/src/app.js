import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

const app = express();

//Middleware

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRouter);
export default app;
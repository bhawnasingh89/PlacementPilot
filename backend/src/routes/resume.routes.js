import express from "express";
import {Router} from "express";
import upload from "../middleware/upload.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  uploadResume,
  getResumeStatus,
} from "../controllers/resumeController.js";

const resumeRouter = Router();
resumeRouter.post(
    "/upload",
    authMiddleware,
    upload.single("resume"),
    uploadResume
);

resumeRouter.get("/status", authMiddleware, getResumeStatus);

export default resumeRouter;

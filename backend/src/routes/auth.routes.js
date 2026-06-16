import {Router} from "express";
import * as authController from "../controllers/authController.js";
import authMiddleware from "../middleware/auth.middleware.js";
import userModel from "../models/user.model.js";


const authRouter = Router();

//Public routes

authRouter.post("/register",authController.register);
authRouter.post("/login",authController.login);

export default authRouter;
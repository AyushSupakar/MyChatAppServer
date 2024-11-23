import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authmiddlewear from "../middlewares/AuthMiddleWare.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
const router = Router()

//Auth
router.post("/auth/login", AuthController.login)

//Chat Group
router.post("/chat-group", authmiddlewear, ChatGroupController.store);

export default router
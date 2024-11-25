import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authmiddlewear from "../middlewares/AuthMiddleWare.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
const router = Router()

//Auth
router.post("/auth/login", AuthController.login)

//Chat Group
router.post("/chat-group", authmiddlewear, ChatGroupController.store);

router.get("/chat-group/:id", authmiddlewear, ChatGroupController.show);

router.get("/chat-group", authmiddlewear, ChatGroupController.index);

router.put("/chat-group/:id", authmiddlewear, ChatGroupController.update);

router.delete("/chat-group/:id", authmiddlewear, ChatGroupController.destroy);



export default router
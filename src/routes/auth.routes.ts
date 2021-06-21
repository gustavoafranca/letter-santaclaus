import { Router } from "express";
import AuthController from "../controller/AuthController";


const authRouter = Router();

authRouter.get('/', AuthController.authenticate)

export default authRouter;
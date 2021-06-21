import { Router } from "express"
import UserController from "../controller/UserController";
import Auth from "../middlewares/AuthMiddlewares";


const userRoutes = Router();

userRoutes.post('/create', Auth, UserController.create)
userRoutes.put('/update/:id', Auth, UserController.update)
userRoutes.delete('/delete/:id', Auth, UserController.delete)
userRoutes.get('/list', Auth, UserController.index)
userRoutes.get('/:id', Auth, UserController.show)

export default userRoutes;
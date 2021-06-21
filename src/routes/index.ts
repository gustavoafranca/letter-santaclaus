import {Router} from 'express'
import authRouter from './auth.routes';
import letterRouter from './letter.routes';
import userRoutes from './user.routes';


const routes = Router();


routes.use('/letter', letterRouter) 
routes.use('/user', userRoutes) 
routes.use('/auth', authRouter) 

export default routes;
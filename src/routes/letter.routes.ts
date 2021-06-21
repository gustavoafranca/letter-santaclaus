import {Router} from 'express'
import LetterController from '../controller/LetterController'
import Auth from '../middlewares/AuthMiddlewares';


const letterRouter = Router();

letterRouter.post('/create', LetterController.create)
letterRouter.put('/update/:id', Auth, LetterController.update)
letterRouter.delete('/delete/:id', Auth, LetterController.delete)
letterRouter.get('/list', Auth, LetterController.index)
letterRouter.get('/list/:uf', Auth, LetterController.indexFilter)
letterRouter.get('/show/:id', Auth, LetterController.show)

export default letterRouter;
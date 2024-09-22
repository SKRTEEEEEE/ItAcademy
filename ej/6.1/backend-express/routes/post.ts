import { Router } from "express";
import { PostController } from "../controllers/post";


const controller = new PostController()
const ExpressPostRouter = Router()

ExpressPostRouter.post('/posts', controller.create);
ExpressPostRouter.get('/posts', controller.readAll);
ExpressPostRouter.delete('/posts/:id', controller.delete);
ExpressPostRouter.put('/posts/:id', controller.update);



export {ExpressPostRouter}
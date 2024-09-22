import { Router } from "express";
import { PostController } from "../controllers/post";
import { authenticateJWT } from "../controllers/auth";


const controller = new PostController()
const ExpressPostRouter = Router()

ExpressPostRouter.post('/posts', authenticateJWT, controller.create);


export {ExpressPostRouter}
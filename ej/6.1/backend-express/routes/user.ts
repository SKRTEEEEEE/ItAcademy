import { Router } from "express";
import { UserController } from "../controllers/user";


const controller = new UserController()
const ExpressUserRouter = Router()

ExpressUserRouter.get("/users", controller.readAll)

export {ExpressUserRouter}
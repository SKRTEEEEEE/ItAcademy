import { Router } from "express";
import { UserController } from "../controllers/user";


const controller = new UserController()
const ExpressUserRouter = Router()

ExpressUserRouter.post("/signup", controller.register)
ExpressUserRouter.get("/users", controller.readAll)
ExpressUserRouter.get("/users/id/:id", controller.readById)
ExpressUserRouter.get("/users/email/:email", controller.readByEmail)

export {ExpressUserRouter}
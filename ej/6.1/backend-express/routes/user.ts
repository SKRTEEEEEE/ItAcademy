import { Router } from "express";
import { UserController } from "../controllers/user";
import { authorizeAdmin } from "../controllers/auth";


const controller = new UserController()
const NoAuthenticateRouter = Router()
const UserRouter = Router()

NoAuthenticateRouter.post("/login", controller.login)
NoAuthenticateRouter.post("/signup", controller.register)
UserRouter.get("/users", authorizeAdmin, controller.readAll)
UserRouter.get("/users/id/:id", controller.readById)
UserRouter.get("/users/email/:email", controller.readByEmail)
UserRouter.put("/users/update/:id", controller.update)

export {UserRouter, NoAuthenticateRouter}
import { Router } from "express";
import { UserController } from "../controllers/user";
import { authenticateJWT } from "../controllers/auth";


const controller = new UserController()
const NoAuthenticateRouter = Router()
const UserRouter = Router()

NoAuthenticateRouter.post("/login", controller.login)
NoAuthenticateRouter.post("/signup", controller.register)
UserRouter.get("/users", authenticateJWT, controller.readAll)
UserRouter.get("/users/id/:id", authenticateJWT, controller.readById)
UserRouter.get("/users/email/:email",authenticateJWT, controller.readByEmail)

export {UserRouter, NoAuthenticateRouter}
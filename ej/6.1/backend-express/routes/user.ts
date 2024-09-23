import { Router } from "express";
import { UserController } from "../controllers/user";
// import { authorizeAdmin } from "../controllers/auth";


const controller = new UserController()
const NoAuthenticateRouter = Router()
const UserRouter = Router()

NoAuthenticateRouter.post("/login", controller.login)
NoAuthenticateRouter.post("/signup", controller.register)
UserRouter.get("/users/:params", controller.read)
// UserRouter.get("/users/email/:email", controller.readByEmail)
UserRouter.put("/users/:id", controller.update)
UserRouter.get("/admins/users", controller.readAll)
UserRouter.put("/admins/banned/:id", controller.updateBanned)

export {UserRouter, NoAuthenticateRouter}
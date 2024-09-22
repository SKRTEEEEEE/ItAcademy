
import { Application } from "express";
import { UserRouter } from "./user";
import { ExpressPostRouter } from "./post";
// import { authenticateJWT } from "../controllers/auth";

export const setupRoutes = (app: Application) => {
  // app.use(NoAuthenticateRouter)
  // app.use(authenticateJWT)
  app.use(UserRouter);
  app.use(ExpressPostRouter);
};
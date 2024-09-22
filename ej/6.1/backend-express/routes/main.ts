
import express,{ Application, NextFunction, Request, Response } from "express";
import { NoAuthenticateRouter, UserRouter } from "./user";
import { ExpressPostRouter } from "./post";
import { authenticateJWT } from "../controllers/auth";

export const setupRoutes = (app: Application) => {
  app.use(express.json());
  app.use(NoAuthenticateRouter)
  app.use((req, res, next) => {
    console.log("Before authenticateJWT middleware:", req.body);
    next();
  });
  app.use(authenticateJWT)
  // app.use((req, res, next) => {
  //   console.log("After authenticateJWT middleware:", req.body);
  //   next();
  // });
  app.use(UserRouter);
  app.use(ExpressPostRouter);
  app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      console.error(err.stack);
      return res.status(500).json({ message: err.message });
    }
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  });
};

import { Application } from "express";
import { ExpressUserRouter } from "./user";
import { ExpressPostRouter } from "./post";

export const setupRoutes = (app: Application) => {
  app.use(ExpressUserRouter);
  app.use(ExpressPostRouter);
};
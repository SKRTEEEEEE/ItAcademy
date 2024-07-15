
import express from 'express';
import bodyParser from 'body-parser'; 
import { InMemoryUserRepository } from './infrastructure/repositories/InMemoryUserRepository';
import UserController from './infrastructure/controllers/UserController';



export function createApp() {
  const app = express();
  app.use(bodyParser.json());

  const userRepository = new InMemoryUserRepository();
  const userController = new UserController(userRepository);

  app.post('/users', (req, res) => userController.createUserHandler(req, res));

  return app;
}


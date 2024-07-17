
import express from "express"
import InMemoryUserRepository from "./infrastructure/repositories/InMemoryUserRepository";
import UserController from "./infrastructure/controllers/UserController";

export const createApp = () => {
  const app = express();
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const userController = new UserController(userRepository);

app.post('/users', (req, res) => userController.createUserHandler(req, res));

  return app;
}

// module.exports = createApp;
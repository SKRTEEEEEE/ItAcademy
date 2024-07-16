


const express = require('express');
const InMemoryUserRepository = require('./infrastructure/repositories/InMemoryUserRepository');
const UserController = require('./infrastructure/controllers/UserController');

const createApp = () => {
  const app = express();
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const userController = new UserController(userRepository);

app.post('/users', (req, res) => userController.createUserHandler(req, res));

  return app;
}

module.exports = createApp;
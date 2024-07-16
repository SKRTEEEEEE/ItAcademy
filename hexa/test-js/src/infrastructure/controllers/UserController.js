const CreateUser = require('../../application/usecases/CreateUser');

class UserController {
  constructor(userRepository) {
    this.createUser = new CreateUser(userRepository);
  }

  async createUserHandler(req, res) {
    const { name, email } = req.body;
    const userId = await this.createUser.execute(name, email);
    res.status(201).send({ id: userId });
  }
}

module.exports = UserController;
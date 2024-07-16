// src/application/usecases/CreateUser.js
// const User = require('../../domain/entities/User');
const User = require("../../domain/entities/User")

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(name, email) {
    const user = new User(null, name, email);
    return await this.userRepository.add(user);
  }
}

module.exports = CreateUser;

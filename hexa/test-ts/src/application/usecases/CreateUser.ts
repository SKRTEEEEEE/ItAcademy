// src/application/usecases/CreateUser.js
// const User = require('../../domain/entities/User');

import User from "../../domain/entities/User";
import UserRepository from "../../domain/ports/UserRepository";

export default class CreateUser {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(name: string, email: string): Promise<number> {
    const user = new User(0, name, email);
    return await this.userRepository.add(user);
  }
}



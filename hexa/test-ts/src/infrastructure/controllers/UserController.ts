import { Request, Response } from "express";
import CreateUser from "../../application/usecases/CreateUser";
import UserRepository from "../../domain/ports/UserRepository";

export default class UserController {
  private createUser: CreateUser;

  constructor(userRepository: UserRepository) {
    this.createUser = new CreateUser(userRepository);
  }

  async createUserHandler(req: Request, res: Response) {
    const { name, email } = req.body;
    const userId = await this.createUser.execute(name, email);
    res.status(201).send({ id: userId });
  }
}


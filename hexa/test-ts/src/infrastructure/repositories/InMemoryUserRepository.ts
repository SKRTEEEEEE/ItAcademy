import User from "../../domain/entities/User";
import UserRepository from "../../domain/ports/UserRepository";

export default class InMemoryUserRepository extends UserRepository {
  private users: User[] = [];
  private currentId: number = 1;

  constructor() {
    super();
    this.users = [];
    this.currentId = 1;
  }

  async add(user: User): Promise<number> {
    user.id = this.currentId++;
    this.users.push(user);
    return user.id;
  }

  async getById(userId: number): Promise<User | undefined> {
    return this.users.find(user => user.id === userId);
  }
}

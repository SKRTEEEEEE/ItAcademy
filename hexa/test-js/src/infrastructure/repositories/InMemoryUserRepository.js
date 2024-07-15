// src/infrastructure/repositories/InMemoryUserRepository.js
import UserRepository from '../../domain/ports/UserRepository';

class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.users = [];
    this.currentId = 1;
  }

  async add(user) {
    user.id = this.currentId++;
    this.users.push(user);
    return user.id;
  }

  async getById(userId) {
    return this.users.find(user => user.id === userId);
  }
}

export default InMemoryUserRepository;

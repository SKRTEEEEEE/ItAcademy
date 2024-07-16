const UserRepository = require('../../domain/ports/UserRepository');
const User = require('../../domain/entities/User');

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

module.exports = InMemoryUserRepository;
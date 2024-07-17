import User from "../entities/User";

// export default abstract class UserRepository {
//     async add(user: User) {
//       throw new Error('Method not implemented');
//     }
  
//     async getById(userId: number) {
//       throw new Error('Method not implemented');
//     }
//   }
  
export default abstract class UserRepository {
  abstract add(user: User): Promise<number>

  abstract getById(userId: number): Promise<User | undefined>
}

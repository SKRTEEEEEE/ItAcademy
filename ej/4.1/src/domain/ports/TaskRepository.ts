import Task from "../entities/Task";

// export default abstract class UserRepository {
//     async add(user: User) {
//       throw new Error('Method not implemented');
//     }
  
//     async getById(userId: number) {
//       throw new Error('Method not implemented');
//     }
//   }
  
export default abstract class TaskRepository {
  // abstract add(user: User): Promise<number>

  // abstract getById(userId: number): Promise<User | undefined>
  abstract generateUniqueId(): number
  abstract add(task: Task): void
  abstract list(): Task[]
  abstract complete(id: number): void
  abstract delete(id: number): void

}

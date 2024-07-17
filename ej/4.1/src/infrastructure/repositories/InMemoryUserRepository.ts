import Task from "../../domain/entities/Task";
import TaskRepository from "../../domain/ports/TaskRepository";


export default class InMemoryTaskRepository extends TaskRepository {
  // private users: User[] = [];
  // private currentId: number = 1;

  // constructor() {
  //   super();
  //   this.users = [];
  //   this.currentId = 1;
  // }

  // async add(user: User): Promise<number> {
  //   user.id = this.currentId++;
  //   this.users.push(user);
  //   return user.id;
  // }

  // async getById(userId: number): Promise<User | undefined> {
  //   return this.users.find(user => user.id === userId);
  // }
  private tasks: Task[] = [];
  private currentId: number = 1;


  constructor() {
    super();
    this.tasks = [];
    this.currentId = 1;
  }

  add(task: Task): void {
    this.tasks.push(task)
  }

  list(): Task[] {
    return this.tasks;
  }

  complete(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
    }
  }
  delete(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  generateUniqueId(): number {
    return this.currentId++;
  }
  }



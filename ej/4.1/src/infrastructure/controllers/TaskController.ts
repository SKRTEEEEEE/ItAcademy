import { Request, Response } from "express";
import AddTask from "../../application/usecases/AddTask";
import CompleteTask from "../../application/usecases/CompleteTask";
import DeleteTask from "../../application/usecases/DeleteTask";
import ListTasks from "../../application/usecases/ListTasks";
import TaskRepository from "../../domain/ports/TaskRepository";


// export default class TaskController {
//   private createUser: CreateUser;

//   constructor(userRepository: UserRepository) {
//     this.createUser = new CreateUser(userRepository);
//   }

//   async createUserHandler(req: Request, res: Response) {
//     const { name, email } = req.body;
//     const userId = await this.createUser.execute(name, email);
//     res.status(201).send({ id: userId });
//   }
// }


export default class TaskController {
  private addTask: AddTask;
  private completeTask: CompleteTask;
  private deleteTask: DeleteTask;
  private listTasks: ListTasks;


  constructor(taskRepository: TaskRepository){
    this.addTask = new AddTask(taskRepository)
    this.completeTask = new CompleteTask(taskRepository)
    this.deleteTask = new DeleteTask(taskRepository)
    this.listTasks = new ListTasks(taskRepository)
  }

  addTaskHandler(req: Request, res: Response) {
    const { description } = req.body;
    const taskId = this.addTask.execute(description)
    // res.status(201).send({ id: taskId });
    res.status(201).json({ id: taskId });
  }

  completeTaskHandler(req: Request, res: Response) {
    const { id } = req.params;
    this.completeTask.execute(Number(id))
    res.status(204).send();
  }
  
  deleteTaskHandler(req: Request, res: Response) {
    const { id } = req.params;
    this.deleteTask.execute(Number(id))
    res.status(204).send();
  }
  listTasksHandler(req: Request, res: Response) {
    const tasks = this.listTasks.execute()
    res.json(tasks);
  }


}

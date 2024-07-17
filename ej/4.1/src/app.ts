
import express, { NextFunction, Request, Response } from "express"
import InMemoryTaskRepository from "./infrastructure/repositories/InMemoryUserRepository";
import TaskController from "./infrastructure/controllers/TaskController";

export const createApp = () => {
  const app = express();
app.use(express.json());

// const userRepository = new InMemoryUserRepository();
// const userController = new UserController(userRepository);

// app.post('/users', (req, res) => userController.createUserHandler(req, res));

  const taskRepository = new InMemoryTaskRepository();
  const taskController = new TaskController(taskRepository);


  //Middleware Cache-Control
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
  })

  //Middleware CORS

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
      res.status(200).end();
    }

    next();
  })

  // Middleware autentificación
  app.use((req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.status(401).json({ message: "Unauthorized" });
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    if (username !== 'LoveNode' || password !== 'Forever') {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  })

  app.post("/tasks", (req, res) => taskController.addTaskHandler(req, res));
  app.get("/tasks", (req, res) => taskController.listTasksHandler(req, res));
  app.put("/tasks/:id/complete", (req, res) => taskController.completeTaskHandler(req, res));
  app.delete("/tasks/:id", (req, res) => taskController.deleteTaskHandler(req, res));

  return app;
}

// module.exports = createApp;
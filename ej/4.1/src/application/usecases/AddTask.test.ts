import InMemoryTaskRepository from "../../infrastructure/repositories/InMemoryUserRepository"
import AddTask from "./AddTask";

describe("AddTask",()=>{
    it("should add a task to the repo",()=>{
        const taskRepository = new InMemoryTaskRepository();
        const addTask = new AddTask(taskRepository)

        addTask.execute("Test Task 1")

        const tasks = taskRepository.list();

        expect(tasks.length).toBe(1)
        expect(tasks[0].description).toBe("Test Task 1")
        expect(tasks[0].completed).toBe(false)

    })
})
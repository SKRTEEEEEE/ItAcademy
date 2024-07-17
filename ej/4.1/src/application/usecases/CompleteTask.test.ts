import InMemoryTaskRepository from "../../infrastructure/repositories/InMemoryUserRepository"
import CompleteTask from "./CompleteTask"

describe("CompleteTask",()=>{
    it("should complete a task in the repo", ()=>{
        const taskRepository = new InMemoryTaskRepository()
        const completeTask = new CompleteTask(taskRepository)

        taskRepository.add({id: 1,description: "Test Task 1",completed: false})
        
        completeTask.execute(1)
        const tasks = taskRepository.list();

        expect(tasks.length).toBe(1);
        expect(tasks[0].completed).toBe(true);


    })
})
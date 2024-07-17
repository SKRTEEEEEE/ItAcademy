import InMemoryTaskRepository from "../../infrastructure/repositories/InMemoryUserRepository"
import DeleteTask from "./DeleteTask";

describe("DeleteTask", ()=>{
    it("should delete a task", ()=>{
      const taskRepository = new InMemoryTaskRepository();
      const deleteTask = new DeleteTask(taskRepository); 

      taskRepository.add({id: 1,description: "Test Task 1",completed: false})
      deleteTask.execute(1);

      const tasks = taskRepository.list();

      expect(tasks.length).toBe(0);
      expect(tasks).toEqual([]);
      
    })
})
import InMemoryTaskRepository from "../../infrastructure/repositories/InMemoryUserRepository";
import ListTasks from "./ListTasks";

describe("ListTask", ()=>{
    it("should list tasks", ()=>{
      const taskRepository = new InMemoryTaskRepository();
      const listTask = new ListTasks(taskRepository);  

      taskRepository.add({id:1,description:"Test Task 1", completed: false});
        taskRepository.add({id:2, description:"Test Task 2", completed: true});

      const result = listTask.execute();

      expect(result.length).toBe(2);
      expect(result[0].description).toBe("Test Task 1");
      expect(result[1].description).toBe("Test Task 2");
      expect(result[0].completed).toBe(false);
      expect(result[1].completed).toBe(true);

    })
})
// import { addTask, tasks, listTasks, deleteTask, completeTask } from './app';

// describe('addTask function', () => {
//   it('should add a new task to the tasks array', () => {
//     addTask('Do the laundry');

//     expect(tasks.length).toBe(1); // Verifica que se haya añadido una tarea
//     expect(tasks[0].description).toBe('Do the laundry'); // Verifica la descripción de la tarea añadida
//     expect(tasks[0].completed).toBe(false); // Verifica que la tarea añadida no esté marcada como completada
//   });
// });

// describe('listTasks function', () => {
//     it('should format tasks correctly', () => {
//       tasks.push({ id: 2, description: 'Walk the dog', completed: true });
  
//       const output = listTasks();
  
//       expect(output).toContain('Tasks:');
//       expect(output).toContain('1. [ ] Do the laundry');
//       expect(output).toContain('2. [X] Walk the dog');
//     });
//   });

// describe("completeTask function", ()=>{
//     it("should mark a task as completed", ()=>{
//         tasks.push({id: 3, description: "Listen some music", completed: false});
//         completeTask(3);
        
//         expect(tasks[2].completed).toBe(true);
//     })
// })

// describe("deleteTask function", ()=>{
//     it("should delete a task", ()=>{
//         tasks.push({id: 4, description: "Buy groceries", completed: false});

//         deleteTask(3);

//         expect(tasks.length).toBe(3);
//     })
// })
import { addTask, listTasks, completeTask, deleteTask, tasks } from './app';

describe('Todo List Application', () => {
    beforeEach(() => {
        tasks.length = 0; // Limpiar las tareas antes de cada prueba
    });

    it('should add a task', () => {
        addTask('Do the laundry');
        expect(tasks.length).toBe(1);
        expect(tasks[0].description).toBe('Do the laundry');
        expect(tasks[0].completed).toBe(false);
    });

    it('should list tasks', () => {
        addTask('Do the laundry');
        console.log = jest.fn(); // Mock de console.log
        listTasks();
        expect(console.log).toHaveBeenCalledWith('Tasks:');
        expect(console.log).toHaveBeenCalledWith('1. [ ] Do the laundry');
    });

    it('should complete a task', () => {
        addTask('Do the laundry');
        completeTask(1);
        expect(tasks[0].completed).toBe(true);
    });

    it('should delete a task', () => {
        addTask('Do the laundry');
        deleteTask(1);
        expect(tasks.length).toBe(0);
    });
});

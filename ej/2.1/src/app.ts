// Funciones App To Do List


export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export let tasks: Task[] = [];

// Función para verificar si un ID ya existe
const idExists = (id: number): boolean => {
  return tasks.some(task => task.id === id);
}
// Generador de ID único
const generateUniqueId = (): number => {
  let id: number = 1;
  while(idExists(id)){
      id++
  }
  return id;
}

export const addTask = (description: string): void => {
  if (tasks.length >= 99) {
      console.log('Número máximo de tareas alcanzado');
      return;
  }
  const newTask: Task = {
      id: generateUniqueId(),
      description,
      completed: false
  };

  tasks.push(newTask);
};
export const listTasks = (): Task[] => {
  console.log('Tasks:\n=====\n\n');
  tasks.forEach(task => {
      console.log(
` - ${task.completed ? "[x]":"[ ]"} ${task.description}
  task id: ${task.id}
`);
  });
  return tasks; // Devuelve el array de tareas
};
export const completeTask = (id: number): void => {
  const task = tasks.find(task => task.id === id);
  if (task) {
      task.completed = true;
  }
};
export const deleteTask = (id: number): void => {
  tasks = tasks.filter(task => task.id !== id);
};






// Funciones Debounce

// export function debounce<DebounceFunction extends (...args: any[])=>void>(func:DebounceFunction, wait: number): (...args: Parameters<DebounceFunction>)=>void{
//     let timeout: ReturnType<typeof setTimeout>;
//     return function(this:unknown, ...args: Parameters<DebounceFunction>){
        
//         clearTimeout(timeout);
//         timeout = setTimeout(() =>{
//             func.apply(this, args);
        
//         }, wait);
//     };

// }
// export function debounce<Args extends any[]>(callback: (...args: Args) => void, wait: number): (...args: Args) => void {
//     let timerId: ReturnType<typeof setTimeout>;
//     return (...args: Args) => {
//       clearTimeout(timerId);
//       timerId = setTimeout(() => {
//         callback(...args);
//       }, wait);
//     };
// }
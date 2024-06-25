export interface Task {
    id: number;
    description: string;
    completed: boolean;
}

export let tasks: Task[] = [];

export const addTask = (description: string): void => {
    const newTask: Task = {
        id: tasks.length + 1,
        description,
        completed: false
    };

    tasks.push(newTask);
};

// export const listTasks = (): string[] => {
//     const output: string[] = [];
//     output.push('Tasks:');
    
//     tasks.forEach(task => {
//         output.push(`${task.id}. ${task.completed ? '[X]' : '[ ]'} ${task.description}`);
//     });
//     console.log(output);
//     return output;
// };
export const listTasks = (): Task[] => {
    console.log('Tasks:');
    tasks.forEach(task => {
        console.log(`${task.id}. ${task.completed ? "[x]":"[ ]"} ${task.description}`);
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


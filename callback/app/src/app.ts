// import fetch from 'node-fetch';
import axios from 'axios';


// Funciones App To Do List
export interface Task {
    id: number;
    description: string;
    completed: boolean;
  }

  export type Pokedex = {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export type Result = {
    name: string;
    url:  string;
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

  export const deleteAllTasks = (): void => {
    tasks = [];
  };  

//Funciones app Pokemon
const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemonData = async (offset: number, limit: number): Promise<Result[]> => {
  try {
    const url = `${POKEAPI_URL}?offset=${offset}&limit=${limit}`;
    console.log(`Fetching data from: ${url}`);
    const response = await axios.get<Pokedex>(url);
    console.log(`Data received: ${JSON.stringify(response.data)}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};
  
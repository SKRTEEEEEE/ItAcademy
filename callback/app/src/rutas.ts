import express from "express"
import path from "path"
import {  handleAddTask, handleCompleteTask, handleDeleteAllTasks, handleDeleteTask, handleGetGoodTasks } from "./handle/good-todo";
import { debouncedAddTask, debouncedCompleteTask, debouncedDeleteTask, handleGetBadTasks } from "./handle/bad-todo";
import { badDebouncedFullIncrement, badDebouncedMixedIncrement, badThrottledFullIncrement, badThrottledMixedIncrement } from "./handle/bad-vs";

const rutas = express.Router();

// Obtener la ruta absoluta al directorio 'public'
const publicDirectory = path.resolve('public');

rutas.get('/',(req,res)=>{
    res.sendFile('index.html');
})

//Debounce 'todo' examples
rutas.delete("/tasks/", handleDeleteAllTasks)
//Good debounce example
rutas.get("/todo-debounce",(req,res)=>{
    res.sendFile('todo-debounce.html',  { root: publicDirectory });
})

rutas.put("/tasks/:id/complete", handleCompleteTask)
rutas.delete("/tasks/:id", handleDeleteTask) 
rutas.post("/tasks/", handleAddTask)
rutas.get("/tasks/", handleGetGoodTasks)
//Bad debounce example
rutas.get("/todo-bad-debounce",(req, res)=>{
    res.sendFile('todo-bad-debounce.html', { root: publicDirectory });
})

rutas.put("/bad-tasks/:id/complete", debouncedCompleteTask)
rutas.delete("/bad-tasks/:id", debouncedDeleteTask)
rutas.post("/bad-tasks/", debouncedAddTask)
rutas.get("/bad-tasks/", handleGetBadTasks)

//Vs examples
//Bad vs
rutas.get("/vs-bad",(req, res)=>{
    res.sendFile('vs-bad.html', { root: publicDirectory });
})

rutas.get("/bad-debounce-full", badDebouncedFullIncrement)
rutas.get("/bad-throttle-full", badThrottledFullIncrement)
rutas.get("/bad-debounce-wrong", badDebouncedMixedIncrement)
rutas.get("/bad-throttle-wrong", badThrottledMixedIncrement)

export default rutas;
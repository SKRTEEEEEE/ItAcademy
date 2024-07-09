import express from "express"
import path from "path"
import {  handleAddTask, handleCompleteTask, handleDeleteAllTasks, handleDeleteTask, handleGetGoodTasks } from "./handle/good-todo";
import { debouncedAddTask, debouncedCompleteTask, debouncedDeleteTask, handleGetBadTasks } from "./handle/bad-todo";
import { badDebouncedFullIncrement, badDebouncedMixedIncrement, badThrottledFullIncrement, badThrottledMixedIncrement } from "./handle/vs";
import { goodDebouncedMixedIncrement, goodThrottledMixedIncrement, incrementDebounceFullCount,  incrementThrottleFullCount } from "./handle/wrong-vs";

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
rutas.get("/vs",(req, res)=>{
    res.sendFile('vs.html', { root: publicDirectory });
})
// 'working' example
rutas.get("/debounce-full", badDebouncedFullIncrement)
rutas.get("/throttle-full", badThrottledFullIncrement)
// 'not-working' example
rutas.get("/debounce-wrong", badDebouncedMixedIncrement)
rutas.get("/throttle-wrong", badThrottledMixedIncrement)

//Good vs
rutas.get("/vs-wrong",(req, res)=>{
    res.sendFile('vs-wrong.html', { root: publicDirectory });
})

rutas.get("/wrong-debounce-full",incrementDebounceFullCount)
rutas.get("/wrong-throttle-full",incrementThrottleFullCount)
rutas.get("/wrong-debounce-wrong", goodDebouncedMixedIncrement)
rutas.get("/wrong-throttle-wrong", goodThrottledMixedIncrement)

export default rutas;
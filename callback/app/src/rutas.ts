import express from "express"
import path from "path"
import {  handleAddTask, handleCompleteTask, handleDeleteAllTasks, handleDeleteTask, handleGetGoodTasks } from "./handle/good-todo";
import { debouncedAddTask, debouncedCompleteTask, debouncedDeleteTask, handleGetBadTasks } from "./handle/bad-todo";

const rutas = express.Router();

// Obtener la ruta absoluta al directorio 'public'
const publicDirectory = path.resolve('public');

rutas.get('/',(req,res)=>{
    res.sendFile('index.html');
})

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

export default rutas;
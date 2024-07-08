import express from "express"
import path from "path"
import { debouncedAddTask, debouncedCompleteTask, debouncedDeleteTask, handleGetTasks } from "./handle";

const rutas = express.Router();

// Obtener la ruta absoluta al directorio 'public'
const publicDirectory = path.resolve('public');

rutas.get('/',(req,res)=>{
    res.sendFile('index.html');
})

rutas.get("/todo-debounce",(req,res)=>{
    res.sendFile('todo-debounce.html',  { root: publicDirectory });
})
rutas.put("/tasks/:id/complete", (req, res)=>{
    debouncedCompleteTask(req, res)
})
rutas.delete("/tasks/:id", (req, res)=>{
    debouncedDeleteTask(req, res)
}) 
rutas.post("/tasks/", (req, res)=>{
    debouncedAddTask(req, res)
})

rutas.get("/tasks/", (req, res)=>{
    handleGetTasks(req, res)

})

export default rutas;
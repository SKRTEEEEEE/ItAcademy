import express from "express"

const rutas = express.Router();

rutas.get('/',(req,res)=>{
    res.sendFile('index.html');
})



export default rutas;
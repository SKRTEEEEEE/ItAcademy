type Cl = {
    nombre:string
    edad:number
}
class ClientePremium implements Cl{
    nivel:string
    nombre:string
    edad:number
    constructor(nivel:string,nombre:string,edad:number){
        this.nivel=nivel
        this.nombre=nombre
        this.edad=edad
    }
}


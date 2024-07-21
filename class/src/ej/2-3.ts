type Pers = {
    nombre: string
    edad: number
    presentarse(): void
}
class Empl implements Pers{
    nombre:string
    edad:number
    salario:number
    constructor(nombre:string,edad:number,salario:number){
        this.nombre=nombre
        this.edad=edad
        this.salario=salario
    }
    presentarse(): void {
        console.log("Hola!")
    }
}
class Gerente extends Empl{
    empleados:number
    constructor(empleado:Empl, empleados:number){
        super(empleado.nombre,empleado.edad,empleado.salario)
        this.empleados=empleados
    }
    presentarse(): void {
        console.log(`Hola, soy Gerente de ${this.empleados} empleados`)
    }
}

class Ingeniero extends Empl{
    tech:string
    constructor(nombre:string, edad:number, salario:number, tech:string){
        super(nombre, edad, salario)
        this.tech=tech
    }
    presentarse(): void {
        console.log(`Hola, soy Ingeniero de ${this.tech}`)
    }
}

const juan = new Empl("juan", 83, 1892)
const ingenieroJuan = new Ingeniero("juan",84,1872,"javascript")
console.log(ingenieroJuan)
const generenteJuan = new Gerente(juan,9)
console.log(generenteJuan)
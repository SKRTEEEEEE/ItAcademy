export class PersonaD {
    nombre: string
    edad: number

    constructor(nombre: string, edad: number){
        this.nombre=nombre
        this.edad=edad
    }
    presentarse():string{
        return `Soy ${this.nombre}, y tengo ${this.edad} años`
    }
}

class EstudianteD extends PersonaD{
    grado: string
    constructor(persona:PersonaD,grado: string){
        super(persona.nombre,persona.edad)
        this.grado=grado
    }
    presentarse(): string {
        return `Soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.grado}`
    }
}

const juan = new PersonaD("Juan", 21)
const estudianteJuan = new EstudianteD(juan,"Mates")
console.log(estudianteJuan.presentarse())


export class EmpleadoD extends PersonaD{
    salario: number
    constructor(persona: PersonaD, salario:number){
        super(persona.nombre, persona.edad)
        this.salario=salario
    }
    trabajar():string{
        return "Estoy trabajando..."
    }
}

export class Ingeniero extends EmpleadoD{
    constructor(empleado:EmpleadoD){
        super(empleado, empleado.salario)
    }
    trabajar(): string {
        return "Estoy trabajando ingeniando cosas..."
    }
    presentarse(): string {
        return `Soy ${this.nombre}, y tengo ${this.edad} años y trabajo como Ingeniero`
    }
}

const empleadoJuan = new EmpleadoD(juan, 1000)
const ingenieroJuan = new Ingeniero(empleadoJuan)

console.log(ingenieroJuan.presentarse())
console.log(ingenieroJuan.trabajar())


class Transporte{
    velocidadMax: number;
    capacidad: number;
    constructor(velocidadMax: number, capacidad: number){
        this.velocidadMax=velocidadMax
        this.capacidad=capacidad
    }
}
class Bicicleta extends Transporte{
    ruedas: number;
    modelo: string;
    marca: string;
    constructor(transporte: Transporte, ruedas:number,modelo:string,marca:string){
        super(transporte.velocidadMax, transporte.capacidad)
        this.ruedas=ruedas;
        this.modelo=modelo
        this.marca=marca
    }
}
class Avion extends Transporte{
    modelo: string|number;
    marca: string;
    constructor(transporte: Transporte, modelo:string|number,marca:string){
        super(transporte.velocidadMax,transporte.capacidad)
        this.modelo=modelo
        this.marca=marca
    }
} 
const boeing737 = new Avion(new Transporte(3700,100),737,"Boeing")
console.log(boeing737)
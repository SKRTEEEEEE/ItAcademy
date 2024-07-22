// interface Vehiculo{
//     marca: string
//     modelo: string
// }

// class Coche2 implements Vehiculo {
//     marca: string
//     modelo: string
//     constructor(marca: string, modelo:string){
//         this.marca=marca
//         this.modelo=modelo
//     }
//     call():void{
//         console.log(`Soy un coche ${this.marca} ${this.modelo}`)
//     }
// }

// interface Producto2{
//     nombre: string;
//     precio: number;
// }
// class ProductoAlimenticio implements Producto2{
//     fechaCaducidad: number;
//     nombre: string;
//     precio: number;
//     constructor(fechaCaducidad:number, nombre:string, precio:number){
//         this.fechaCaducidad=fechaCaducidad
//         this.nombre=nombre
//         this.precio=precio
//     }
// }

// const pero = new ProductoAlimenticio(170898,"Peras", 8)

// type Niveles = 1|2|3|4|5
// interface Cliente2{
//     nombre:string
//     edad:number
//     mostrarDetalles():void
// }
// class ClienteVIP implements Cliente2{
//     nombre:string
//     edad:number
//     nivel: Niveles
//     constructor(nombre:string,edad:number,nivel:Niveles){
//         this.nivel=nivel
//         this.edad=edad
//         this.nombre=nombre
//     }
//     mostrarDetalles(): void {
//         console.log(`Soy el cliente Vip ${this.nombre} con nivel ${this.nivel}`)
//     }
// }
enum Dep {IT="IT",Marketing="Marketing",Dev="Dev"}
type Prs = {
    nombre: string;
    edad: number;
    mostrarDetalles(): string;
}



abstract class AbstractPrs implements Prs {
     nombre: string;
     edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    abstract mostrarDetalles(): string
}

export class ClVIP extends AbstractPrs {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }

    mostrarDetalles(): string {
        return `Cliente VIP ${this.nombre}, ${this.edad} años`;
    }
}

export class Gerent extends AbstractPrs{
    departamento: Dep
    constructor(nombre:string,edad:number, departamento: Dep){
        super(nombre,edad)
        this.departamento=departamento
    }
    mostrarDetalles(): string {
        return `Gerente del departamento ${this.departamento}: ${this.nombre}, ${this.edad} años`;
    }
}

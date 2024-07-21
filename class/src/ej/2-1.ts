interface Vehiculo{
    marca: string
    modelo: string
}

class Coche2 implements Vehiculo {
    marca: string
    modelo: string
    constructor(marca: string, modelo:string){
        this.marca=marca
        this.modelo=modelo
    }
    call():void{
        console.log(`Soy un coche ${this.marca} ${this.modelo}`)
    }
}

interface Producto2{
    nombre: string;
    precio: number;
}
class ProductoAlimenticio implements Producto2{
    fechaCaducidad: number;
    nombre: string;
    precio: number;
    constructor(fechaCaducidad:number, nombre:string, precio:number){
        this.fechaCaducidad=fechaCaducidad
        this.nombre=nombre
        this.precio=precio
    }
}

const pero = new ProductoAlimenticio(170898,"Peras", 8)

type Niveles = 1|2|3|4|5
interface Cliente2{
    nombre:string
    edad:number
    mostrarDetalles():void
}
class ClienteVIP implements Cliente2{
    nombre:string
    edad:number
    nivel: Niveles
    constructor(nombre:string,edad:number,nivel:Niveles){
        this.nivel=nivel
        this.edad=edad
        this.nombre=nombre
    }
    mostrarDetalles(): void {
        console.log(`Soy el cliente Vip ${this.nombre} con nivel ${this.nivel}`)
    }
}
//Ej1

class Estudiante {
    nombre: string;
    edad: number;
    curso: string;

    constructor(nombre: string, edad: number, curso: string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    saludar(): void {
        console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y estudio ${this.curso}`)
    }
}

const yo = new Estudiante("Adan", 28, "NodeJS")
yo.saludar()

//Ej2
class Libro {
    titulo: string;
    autor: string;
    numPaginas: number;

    constructor(titulo: string, autor: string, numPaginas: number){
        this.titulo=titulo;
        this.autor=autor;
        this.numPaginas=numPaginas;
    }
    descripcion(): void {
        console.log(`${this.titulo}, de ${this.autor} con ${this.numPaginas} paginas.`)
    }
}

const lib1 = new Libro("Gas", "Gasgas", 1000)
const lib2 = new Libro("Js", "SKRTEEEEEE", 500)

lib1.descripcion()
lib2.descripcion()

//Ej3


class Producto {
    nombre: string;
    precio: number;
    categoria: string;

    constructor(nombre: string, precio: number, categoria: string){
        this.categoria=categoria;
        this.nombre=nombre;
        this.precio=precio;
    }
}

class ProductoController {
    productos: Producto[] = []

    add(producto: Producto): void{
        this.productos.push({
            nombre: producto.nombre,
            precio: producto.precio,
            categoria: producto.categoria,
        })
    }

    show(): Producto[]{
        return this.productos
    }
}

const controlador = new ProductoController()
const libro = new Producto("Aprende classes", 18, "techs")
const ropa = new Producto("Sombrero", 20, "techs")
controlador.add(libro)
controlador.add(ropa)
console.log(controlador.show())
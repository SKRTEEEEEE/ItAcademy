class Persona {
    nombre: string;
    edad: number;
    frase: string

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
        this.frase = `Te llamas ${nombre} y tienes ${edad}`
    }

    saludar(): void {
        console.log(this.frase)
    }
}

const persona1 = new Persona("Juan", 30)
persona1.saludar();
// console.log(persona1.saludar())
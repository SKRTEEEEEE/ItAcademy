class PersonaB {
    public nombre: string;
    private edad: number;
    protected direccion: string;

    constructor(nombre: string, edad: number, direccion: string){
        this.nombre=nombre;
        this.edad=edad;
        this.direccion=direccion;
    }
}

const pers1 = new PersonaB("Adan", 28, "Floresta")

console.log(pers1.nombre)
pers1.nombre = "Pepe";
console.log(pers1.nombre)


// pers1.direccion = "casa"
// console.log(pers1.direccion)

class Empleado extends PersonaB {
    constructor(nombre:string, edad:number, direccion:string, private puesto:string){
        super(nombre, edad, direccion)
    }

    mostrarDireccion():void{
        console.log(this.direccion)
    }
    mostrarPuesto(): void {
        console.log(this.puesto)
    }
    // Aunque quokka lo ejecute, y no pare nuestro codigo, aparece error de compilado
    // mostrarEdad():void{
    //     console.log(this.edad)
    // }
}

const pers2 = new Empleado("Pepe", 28, "Malaga", "diseñador")
pers2.mostrarDireccion()
pers2.mostrarPuesto()


// Metodos

class Coche {
    private marca: string;
    private modelo: string;
    private encendido: boolean;

    constructor(marca: string, modelo: string){
        this.marca=marca;
        this.modelo=modelo;
        this.encendido=false;
    }

    public details(): void{
        console.log(`Coche: ${this.marca} ${this.modelo}`)
    }
    private encenderMotor(): void {
        this.encendido = true;
        console.log("Brummm, motor encendido")
    }
    public start(): void{
        if(!this.encendido){
            this.encenderMotor()
        }
        console.log("Brum brumm")
    }
}


const coche1 = new Coche("Seat", "Toledo")
coche1.details()
coche1.start()
coche1.start()


class Rectangulo {
    private _ancho: number;
    private _alto: number;
    constructor(ancho: number, alto: number){
        this._alto=alto;
        this._ancho=ancho;
    }

    public get ancho(): number {
        return this._ancho
    }
    public get alto(): number {
        return this._alto
    }

    public set ancho(ancho:number){
        if(ancho>0){
            this._ancho=ancho
        } else {
            console.log("El ancho debe ser un numero positivo")
        }
    }
    public set alto(alto:number){
        if(alto>0){
            this._alto=alto
        }else{
            console.log("El alto debe ser un numero positivo")
        }
    }
    public calcularArea(): number {
        return this._ancho * this._alto
    }
}

const rect1 = new Rectangulo(5,4)

console.log(rect1.calcularArea())
rect1.alto = 9
rect1.ancho = 10
console.log(rect1.calcularArea())
class PersonaC {
    private nombre: string;
    private edad: number;
    private city: string;
    constructor(nombre: string, edad: number, city: string){
        this.nombre=nombre;
        this.edad=edad;
        this.city=city;
    }
    public getName(): string{
        return this.nombre
    }
    // protected getEdad(): number{
    //     return this.edad
    // }
    public getEdad(): number{
        return this.edad
    }
    // protected getCity(): string{
    //     return this.city
    // }
    public getCity(): string{
        return this.city
    }
}

const personaA = new PersonaC("Adan", 28, "Floresta")
console.log(personaA.getName())

class CuentaBancaria extends PersonaC{
    private saldo: number = 0;
    private moneda: "€" | "$";

    // constructor(persona: PersonaC, moneda: "€"|"$"){
    //     super(persona.getName(),persona.getEdad(),persona.getCity())
    //     this.moneda=moneda
    //     this.saldo=0; 
    // }
    constructor(persona: PersonaC, moneda: "€" | "$") {
        // Llamar al constructor de la clase base con los valores de la instancia de PersonaC
        super(persona.getName(), persona['edad'], persona['city']);
        this.moneda = moneda;
        
    }
    
    public get saldoActual(): number{
        return this.saldo;
    }
    public set ingresar(saldo: number){
        this.saldo += saldo
    }
    public set retirar(saldo: number){
        if(this.saldo>0 && (this.saldo === saldo||this.saldo>saldo )){
            this.saldo -= saldo
        } else {
            console.log(`You have ${this.saldo}${this.moneda}, this is enough money for retrate ${saldo}${this.moneda}`)
        }
    }
}


const cuentaPersonaA = new CuentaBancaria(personaA, "$")
console.log(cuentaPersonaA)
cuentaPersonaA.ingresar = 50
console.log(cuentaPersonaA)
cuentaPersonaA.retirar = 10
console.log(cuentaPersonaA)
cuentaPersonaA.getName()
cuentaPersonaA.retirar = 80


/*
Esto crea una instancia nueva de la clase cuentaPersonaA, que mantiene el nombre y todo menos el saldo

Aquí hay un desglose del problema:

- Instancia de EmpleadoBanco: 
Cuando creas empleadoA, se llama al constructor de CuentaBancaria, que inicializa el saldo en 0. Esto significa que empleadoA comienza con un saldo de 0, sin importar las operaciones que hayas realizado en cuentaPersonaA.

- Operaciones en cuentaPersonaA: 
Las operaciones que realizas (ingresar y retirar) afectan solo a cuentaPersonaA y no tienen impacto en empleadoA.



class EmpleadoBanco extends CuentaBancaria {
    private puesto: string

    constructor(cuenta: CuentaBancaria, puesto:string){
        super(persona.getName(), persona.getEdad(), persona.getCity(), moneda);
        this.puesto = puesto;
    }
}


const empleadoA = new EmpleadoBanco(cuentaPersonaA, "Gerente");
console.log(`Saldo actual del empleado: ${empleadoA.saldoActual}${empleadoA.getMoneda()}`);
*/

class EmpleadoB{
    private cuenta: CuentaBancaria
    private puesto: string
    private nomina: number
    constructor(cuentaEmpleado: CuentaBancaria, puesto: string, nomina: number){
        this.cuenta=cuentaEmpleado
        this.puesto=puesto
        this.nomina=nomina
    }
    public pagar(): void{
        this.cuenta.ingresar = this.nomina
    }
    public set cambiarNomina(nomina: number){
        this.nomina = nomina
    }
/*
Esto no es posible hacer, ya que se tendria que decir el tipo explicito, o crear una nueva instancia como en el ejemplo
public obtenerDatosEmpleado(): PersonaC {
        return {
            name: this.cuenta.getName(),
            edad: this.cuenta.getEdad(),
            city: this.cuenta.getCity()
        }
    }
*/

    public obtenerDatosEmpleado(): PersonaC {
        return new PersonaC (
            this.cuenta.getName(),
            this.cuenta.getEdad(),
            this.cuenta.getCity()
        )
    }
}

// Al hacer una nueva instancia esta
const empleadoA = new EmpleadoB(cuentaPersonaA, "Gerente", 3000)
console.log(empleadoA)
empleadoA.pagar()
cuentaPersonaA.retirar = 1000
console.log(empleadoA)

console.log(empleadoA.obtenerDatosEmpleado())

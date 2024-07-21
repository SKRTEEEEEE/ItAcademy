enum Rol {"Desarollador", "Diseñador", "Gerente"}
interface Methods {
    getResponsabilidad(): string
}
class Emplea implements Methods{
    protected _nombre:string
    protected _edad: number
    protected _rol: Rol
    constructor(nombre:string, edad:number,rol:Rol){
        this._nombre=nombre
        this._edad=edad
        this._rol=rol
    }
    getResponsabilidad(): string {
        if(this._rol===0){
            return `${this._nombre} es desarrollador`
        } else if(this._rol===1){
            return `${this._nombre} es diseñador`
        } else {
            return `${this._nombre} es gerente`
        }
    }
}

class Des extends Emplea {
    constructor(_nombre:string,_edad:number){
        super(_nombre,_edad,Rol.Desarollador)
    }
    public get nombre():string{
        return this._nombre
    }
    protected get edad():number{
        return this._edad
    }
    public get rol(): Rol{
        return this._rol
    }
}
class Dis extends Emplea {
    constructor(_nombre:string,_edad:number){
        super(_nombre,_edad,Rol.Diseñador)
    }
    public get nombre():string{
        return this._nombre
    }
    public get edad():number{
        return this._edad
    }
    public get rol(): Rol{
        return this._rol
    }
}

let pepe = new Emplea("Pepe",43,Rol.Gerente)



const juanito = new Des("Juan", 24)
const juans = new Dis("juana", 23)
console.log(juanito.rol)
console.log(juans.rol)
console.log(Rol[0])

console.log(juanito.getResponsabilidad())

console.log(pepe.getResponsabilidad())
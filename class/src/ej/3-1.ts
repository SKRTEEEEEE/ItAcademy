type Meth ={
    tocar():string
    vender():string
}
interface Reparable {
    reparar():void
}

abstract class Instrumento implements Meth{
    abstract tocar(): string
    protected modelo: string
    constructor(modelo:string){
        this.modelo=modelo
    }
    vender():string{
        if(this.modelo==="de cola"){
            return "Te lo compro por 10000€"
        } else if(this.modelo==="electrica"){
            return "Te doy 400€"
        } else {
            return "No compramos este modelo"
        }
    }
}

class Guitarra extends Instrumento implements Reparable{
    tocar(): string {
        return `Estas tocando la guitarra ${this.modelo}.`
    }
    reparar(): void {
        console.log(`Reparando guitara ${this.modelo}`)
    }
}
class Piano extends Instrumento implements Reparable{
    tocar(): string {
        return  `Estas tocando el piano ${this.modelo}`
    }
    reparar(): void {
        console.log(`Reparando piano ${this.modelo}`)
    }
}

const de_cola = new Piano("de cola")
const electrica = new Guitarra("eléctrica")


const repararInstrumento = (reparable: Reparable)=>{
    reparable.reparar()
}

const tocarInstrumento = (meth: Meth)=>{
    return meth.tocar()
}

console.log(tocarInstrumento(de_cola))
console.log(tocarInstrumento(electrica))
repararInstrumento(de_cola)
repararInstrumento(electrica)


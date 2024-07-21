enum Cat {"Electronico", "Mueble", "Ropa"}
interface Garantia {
    getGarantia(): string
}
abstract class Pr {
    protected cat: Cat
    constructor(cat:Cat){
        this.cat=cat
    }
}

class Pantalones extends Pr implements Garantia{
    private _marca: string
    private _modelo: string
    constructor(cat:Cat, modelo:string, marca:string){
        super(cat)
        this._marca=marca
        this._modelo=modelo
    }
    public get marca(): string {
        return this._marca
    }
    public get modelo(): string {
        return this._modelo
    }
    public get category(): Cat {
        return this.cat
    }
    getGarantia(): string {
        return "1 mes"
    }
}

const levis = new Pantalones(Cat.Ropa,"denim","levis")

console.log(levis.category)
// levis.category="Electrico"  ❌ es read-only
console.log(levis)
export enum CategoriaVehiculo { "Compacto", "SUV", "Sedán"}
type TarifaTipo = {
    getTarifa():number
}

abstract class TipoVehiculo implements TarifaTipo {
    abstract tipo: "Electrico"|"Combustion"
    abstract cat: CategoriaVehiculo
    getTarifa(): number {
        if(this.tipo==="Combustion"){
            return 10
        } else {
            return 15
        }
    }
}

export class VehiculoElectrico extends TipoVehiculo {
    tipo: "Electrico"
    cat: CategoriaVehiculo
    constructor(cat: CategoriaVehiculo){
        super()
        this.tipo="Electrico"
        this.cat=cat
    }
}
export class VehiculoCombustion extends TipoVehiculo {
    tipo: "Combustion"
    cat: CategoriaVehiculo
    constructor(cat: CategoriaVehiculo){
        super()
        this.tipo="Combustion"
        this.cat=cat
    }
}


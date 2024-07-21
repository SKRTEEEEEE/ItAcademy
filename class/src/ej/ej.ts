export enum Tamaño {
    "XS",
    "S",
    "M",
    "L",
    "XL"
  }
  
  type Planta = {
    getPlanta(): string;
  };
  
  abstract class Prenda implements Planta {
    abstract genero: "Masculino" | "Femenino";
    abstract tamaño: Tamaño;
    getPlanta(): string {
      if (this.genero === "Femenino") {
        return "Esta prenda esta ubicada en la planta baja"
      } else {
        return "Esta prenda esta ubicada en la primera planta"
      }
    }
  }
    export class PrendaMasculina extends Prenda {
    genero: "Masculino";
    tamaño: Tamaño;
    constructor(tamaño: Tamaño) {
      super();
      this.genero = "Masculino";
      this.tamaño = tamaño;
    }
  }

   export class PrendaFemenina extends Prenda{
    genero: "Femenino"
    tamaño: Tamaño
    constructor(tamaño: Tamaño){
        super()
        this.genero="Femenino"
        this.tamaño=tamaño
    }
  }
  
  const pantalon = new PrendaMasculina(Tamaño.S);
  console.log(pantalon);
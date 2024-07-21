import { PrendaFemenina, PrendaMasculina, Tamaño } from "./ej"

test("Should say the gender of the dress", ()=>{
    const falda = new PrendaFemenina(Tamaño.M)
    expect(falda.genero).toBe("Femenino")
    const pants = new PrendaMasculina(Tamaño.XL)
    expect(pants.genero).toBe("Masculino")
})

test("Should say her floor", ()=>{
    const falda = new PrendaFemenina(Tamaño.L)
    expect(falda.getPlanta()).toBe("Esta prenda esta ubicada en la planta baja")
    const pants = new PrendaMasculina(Tamaño.XS)
    expect(pants.getPlanta()).toBe("Esta prenda esta ubicada en la primera planta")
})
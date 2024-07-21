import { EmpleadoD, Ingeniero, PersonaD } from "./1-3"

describe("Explain her work", ()=>{
    
    const empleado = new EmpleadoD(new PersonaD("Juan", 98), 7899)
    expect(empleado.trabajar()).toBe("Estoy trabajando...")
})

test("Ingeniero should presentarse",()=>{
    const ingeniero = new Ingeniero(new EmpleadoD(new PersonaD("Juan", 98), 7899))
    expect(ingeniero.presentarse()).toBe("Soy Juan, y tengo 98 años y trabajo como Ingeniero")
})
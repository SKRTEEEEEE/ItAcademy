import { ClVIP } from "./2-1"

describe("Test 2-1",()=>{
    test("Debe devolver la info del cliente",()=>{
        const pepe = new ClVIP("pepe", 22)
        expect(pepe.mostrarDetalles()).toBe("Cliente VIP pepe, 22 años")
    })
})
import { CategoriaVehiculo, VehiculoCombustion, VehiculoElectrico } from "./v1"

describe("Test para los vehiculos",()=>{
    let seatToledo: VehiculoCombustion;
    let teslaX: VehiculoElectrico;

    beforeAll(()=>{
    seatToledo = new VehiculoCombustion(CategoriaVehiculo.Sedán)
    teslaX = new VehiculoElectrico(CategoriaVehiculo.Sedán)
    })

    test("Propiedad tipo existe en las clases extendidas", ()=>{
        expect(seatToledo.tipo).toBe("Combustion")
        expect(teslaX.tipo).toBe("Electrico")
    })

    test("Devolver tarifa del vehiculo", ()=>{
        expect(seatToledo.getTarifa()).toBe(10)
        expect(teslaX.getTarifa()).toBe(15)
    })


})






import { EmpFull, EmpHalf, RolEmpleado } from "./v2";

describe("Test de app empleados",()=>{
    let empleadoFull: EmpFull;
    let empleadoMid: EmpHalf;

    beforeAll(()=>{
        empleadoFull = new EmpFull(RolEmpleado.Desarrollador)
        empleadoMid = new EmpHalf(15, RolEmpleado.Diseñador)
    })
    test("Debe retornar el total de sueldo",()=>{
        expect(empleadoFull.getSueldo()).toBe(3000)
        expect(empleadoMid.getSueldo()).toBe(300)
    })
})
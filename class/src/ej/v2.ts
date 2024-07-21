export enum RolEmpleado  {"Desarrollador","Diseñador","Gerente"}
type SueldoEmp = {
    getSueldo():number
}
abstract class Emp implements SueldoEmp{
    abstract puesto: RolEmpleado
    abstract jornada: "Tiempo Completo"|"Medio Tiempo"
    abstract horas: number
    getSueldo(): number {
        if(this.jornada==="Tiempo Completo"){
            return 3000
        } else {
            return this.horas * 20
        }
    }
} 

export class EmpFull extends Emp{
    puesto: RolEmpleado
    jornada: "Tiempo Completo"
    horas: 40
    constructor(puesto:RolEmpleado){
        super()
        this.puesto=puesto
        this.jornada="Tiempo Completo"
        this.horas=40
    }
}

export class EmpHalf extends Emp{
    puesto: RolEmpleado
    jornada: "Medio Tiempo"
    horas: number
    constructor(horas: number, puesto: RolEmpleado){
        super()
        this.jornada="Medio Tiempo"
        this.horas=horas
        this.puesto=puesto
    }
}
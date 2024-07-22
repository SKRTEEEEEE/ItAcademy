enum Rol {Admin="Admin",Cliente="Cliente"}
enum EstadoAuth {NoAuth="NoAuth",Auth="Auth"}

abstract class Usuario {
    private static idCounter: number = 1
    private readonly _id: number
    private _nombre: string
    private _rol: Rol
    private _estadoAuth: EstadoAuth
    constructor(nombre:string, rol:Rol){
        this._id=Usuario.idCounter
        this._nombre=nombre
        this._rol=rol
        this._estadoAuth=EstadoAuth.NoAuth
    }
    public getInfo():string{
        return`User ${this._rol}#${this._id}: ${this._nombre}`
    }
    public set estadoAuth(estadoAuth:EstadoAuth){
        this._estadoAuth=estadoAuth
    }
    public get estadoAuth():EstadoAuth{
        return this._estadoAuth
    }
    public get nombre():string{
        return this._nombre
    }
}
class Admin extends Usuario{
    constructor(nombre:string){
        super(nombre,Rol.Admin)
    }
}
class Client extends Usuario{
    constructor(nombre:string){
        super(nombre,Rol.Cliente)
    }
}
class AuthService{
    private _usuarios: Usuario[]=[]
    public registrarUsuario(usuario:Usuario):string{
        this._usuarios.push(usuario)
        return "Se ha registrado el usuario"
    }
    public iniciarSesion(nombre:string):string{
        const user = this._usuarios.find(user=>{
            return user.nombre==nombre
        })
        if(user){
            user.estadoAuth===EstadoAuth.Auth
            return "Usuario ha iniciado session"
        } else {
            return "Debes registrarte antes"
        }
    }
    public verificarAuth(nombre:string):boolean{
        const user = this._usuarios.find(user=>{
            return user.nombre==nombre
        })
        if(user){return true}else{return false}
    }
    public get usuarios():Usuario[]{
        return this._usuarios
    }
}
const pepe = new Admin("pepe")
const juan = new Client("juan")
const maria = new Client("maria")

const app = new AuthService()
console.log(app.iniciarSesion("pepe"))
console.log(app.registrarUsuario(pepe))
console.log(app.verificarAuth("pepe"))
console.log(app.iniciarSesion("pepe"))
console.log(app.usuarios)

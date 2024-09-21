import { PrismaClient } from "@prisma/client";
// import { UserRepository } from "../../core/application/repositories/user";
import {ReadAll} from "../../core/application/usecases/atomic/user"
// import {ReadAll} from "../../core/application/usecases/atomic/user"
import {ErrorBase} from "../../core/domain/errors/main"
import { NextFunction, Request, Response } from "express";
import { PrismaUserRepository } from "../infraestructure/repositories/prisma-user";
// import { PrismaUserRepository } from "../../infraestructure/repositories/prisma-user";
const prisma = new PrismaClient();
const userRepository = new PrismaUserRepository(prisma)

export class UserController {
    // private _userRepository: UserRepository;
    // constructor(){this._userRepository=this.initialize()}
    // initialize(){
    //     return new PrismaUserRepository(prisma)
    // }
    async readAll (req: Request, res: Response, next:NextFunction): Promise<void>{
        const ra = new ReadAll(userRepository)
        try {
            const users = await ra.execute()
            res.status(200).json(users)
        } catch (error) {
            if(error instanceof ErrorBase){
            res.status(400).json({message: error.message})
            }
            next(error)
        }
    }
}
// const userRepository = new PrismaUserRepository(prisma);
// export async function readAll() {
//     const ra = new ReadAll(userRepository);
//     return await ra.execute()
// }
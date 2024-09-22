import { NextFunction, Request, Response } from "express";
import {ReadAll, ReadById} from "../../core/application/usecases/atomic/user"
import { PrismaUserRepository } from "../infraestructure/repositories/prisma-user";
const userRepository = new PrismaUserRepository()

export class UserController {
    // Porque no funciona ❓ 🧠 ⬇️

    // private userRepository: UserRepository;
    // constructor(){this._userRepository=this.initialize()}
    // initialize(){
    //     return new PrismaUserRepository(prisma)
    // }

    // private userRepository: UserRepository;
    // constructor() {
    //     this.userRepository = new PrismaUserRepository();
    // }
    async readById (req: Request, res: Response, next:NextFunction): Promise<void>{
        const r = new ReadById(userRepository)
        try {
            const user = await r.execute(parseInt(req.params.id));
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            next(error);
        }
    }
    async readAll (req: Request, res: Response, next:NextFunction): Promise<void>{
        const ra = new ReadAll(userRepository)
        try {
            const users = await ra.execute()
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }
}

// import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {ReadAll} from "../../../core/application/usecases/atomic/user"
import { PrismaUserRepository } from "../../infraestructure/repositories/prisma-user";
const prisma = new PrismaClient();

// export class UserController {
//     constructor(private readAllUC: ReadAll){}
//     async readAll (req: Request, res: Response): Promise<void>{
//         try {
//             const users = await this.readAllUC.execute()
//             res.status(201).json(users)
//         } catch (error) {
//             res.status(400).json({message: error})
//         }
//     }
// }
const userRepository = new PrismaUserRepository(prisma);
const readAllUC = new ReadAll(userRepository);
export async function readAll() {
    return await readAllUC.execute()
}
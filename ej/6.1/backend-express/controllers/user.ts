import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import {ReadAll, ReadByEmail, ReadById} from "../../core/application/usecases/atomic/user"
import {SetEnvError} from "../../core/domain/errors/main"
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

    async login (req: Request, res: Response, next:NextFunction): Promise<void>{
        const { email, password } = req.body;
        try {
            const user = await userRepository.readByEmail(email);
            if (user && (await bcrypt.compare(password, user.password))) {
                // res.json(user);
                const secret = process.env.JWT_SECRET
                if(!secret) throw new SetEnvError("JWT_SECRET")
                const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            next(error);
        }
    }

    async register (req: Request, res: Response, next:NextFunction): Promise<void>{
        const { name, email, password } = req.body;
        console.log("Registro solicitado:", req.body); // Agrega un log aquí

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await userRepository.create({ name, email, password: hashedPassword });
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
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
    async readByEmail (req: Request, res: Response, next:NextFunction): Promise<void>{
        const r = new ReadByEmail(userRepository)
        try {
            const user = await r.execute(req.params.email)
            if (user) {
                res.json(user)
            } else {
                res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            next(error)
        }
    }
}

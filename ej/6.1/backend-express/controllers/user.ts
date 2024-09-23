import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import {ReadAll, ReadByEmail, ReadById} from "../../core/application/usecases/atomic/user"
import {FindDbError, SetEnvError, UnauthorizedError} from "../../core/domain/errors/main"
import { PrismaUserRepository } from "../infrastructure/repositories/prisma-user";
export const userRepository = new PrismaUserRepository()

export class UserController {
    constructor(){
        this.read = this.read.bind(this);
        this.readById = this.readById.bind(this)
        this.readByEmail = this.readByEmail.bind(this)
    }

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
                const token = jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '1h' });
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
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await userRepository.create({ name, email, password: hashedPassword });
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
    async read(req: Request, res: Response, next:NextFunction): Promise<void>{
        const type = req.query.type as string | undefined;
        if (type === "id") {
            const r = new ReadById(userRepository)
            await this.readById(req, res, next, r)
        } else if(type === "email"){
            const r = new ReadByEmail(userRepository)
            await this.readByEmail(req, res, next, r)
        } else {
            res.status(400).json({message: "Invalid read type"})
        }
    }
    private async readById (req: Request, res: Response, next:NextFunction, r: ReadById): Promise<void>{
        // console.log("readById id:" , req.params.params)
        
        try {
            const user = await r.execute(parseInt(req.params.params));
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            next(error);
        }
    }
    async readByEmail (req: Request, res: Response, next:NextFunction, r: ReadByEmail): Promise<void>{
        try {
            const user = await r.execute(req.params.params)
            if (user) {
                res.json(user)
            } else {
                res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            next(error)
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
    async update (req: Request, res: Response, next:NextFunction): Promise<void>{
        const { name, email, password } = req.body
        let hashedPassword;
        if(password) hashedPassword = await bcrypt.hash(password, 10)
        try {
            if (!req.user) {
                res.status(401).json({ message: 'Unauthorized' });
                throw new UnauthorizedError("user not set in jwt")
            }
            if (req.user.id !== parseInt(req.params.id)) {
                res.status(403).json({ message: 'Forbidden' });
                throw new UnauthorizedError("user not authorized")
            }

            const user = await userRepository.update(parseInt(req.params.id), { name, email, password: hashedPassword })
            if (user) {
                res.json(user)
            } else {
                res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            next(error)
        }
    }
    async updateBanned (req:Request, res: Response, next:NextFunction): Promise<void>{
        try {
            if (!req.user) {
                res.status(401).json({ message: 'Unauthorized' });
                throw new UnauthorizedError("user not set in jwt")
            }
            if (req.user.role !== "ADMIN") {
                res.status(403).json({ message: 'Forbidden' });
                throw new UnauthorizedError("user not authorized")
            }
            const user = await userRepository.readById(parseInt(req.params.id))
            if (!user) {
                res.status(404).json({ message: 'User not exists' })
                throw new FindDbError("user")
            }

            const updatedUser = await userRepository.update(parseInt(req.params.id), { banned: !user.banned })
            if (updatedUser) {
                res.json(updatedUser)
            } else {
                res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            next(error)
        }
    }
}

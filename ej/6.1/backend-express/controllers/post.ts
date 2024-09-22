import { NextFunction, Request, Response } from "express";
import { PrismaPostRepository } from "../infraestructure/repositories/prisma-post";
import { UnauthorizedError } from "../../core/domain/errors/main";

const postRepository = new PrismaPostRepository()

export class PostController {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { title, content } = req.body;
            if (!req.user) {
                res.status(401).json({ message: 'Unauthorized' });
                throw new UnauthorizedError("user not set in jwt")
            }
            const userId = req.user.id;
            const post = await postRepository.create({ title, content }, userId);
            res.status(201).json(post);
        } catch (error) {
            next(error);
        }
    }
}
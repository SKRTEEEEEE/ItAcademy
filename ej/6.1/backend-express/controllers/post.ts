import { NextFunction, Request, Response } from "express";
import { PrismaPostRepository } from "../infraestructure/repositories/prisma-post";
import { FindDbError, UnauthorizedError } from "../../core/domain/errors/main";

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
    async readAll(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const posts = await postRepository.readAll();
            res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    } 
    async update(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const { id } = req.params;
            const { title, content, userId } = req.body;
            if (!req.user || req.user.id !== parseInt(userId)) {
                res.status(401).json({ message: 'Unauthorized' });
                throw new UnauthorizedError(`user jwt ${!req.user ? "not set" : "invalid"}`)
            }

            const post = await postRepository.update(parseInt(id), { title, content });
            res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }
    async delete(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const { id } = req.params;
            const post = await postRepository.readById(parseInt(id))
            if(!post){
                res.status(404).json({message: "Post not found"})
                throw new FindDbError("Post")
            }
            if(!req.user ){
                res.status(401).json({message: "Unauthorized"})
                throw new UnauthorizedError(`user jwt not set`)
            }
            // Hay que testear esto ⬇️⚠️🧠
            if( req.user.id === post.authorId && req.user.role === "ADMIN"){
                const deletedPost = await postRepository.delete(parseInt(id));
                res.status(200).json(deletedPost);
            } else {
                res.status(403).json({message: "Forbidden"})
                throw new UnauthorizedError("user not authorized")
            }


        } catch (error) {
            next(error);
        }
    }
}
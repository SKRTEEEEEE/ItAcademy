import { PrismaClientConfig } from "../connectors/prisma-db";
import { Post } from "../../../core/domain/entities/Post"
import { PostRepository } from "../../../core/application/repositories/post"

export class PrismaPostRepository extends PrismaClientConfig implements PostRepository {

    async create(postData: Omit<Post, "id" | "deleted">, userId: number): Promise<Post> {
        return await this.prisma.post.create({
            data: {
                title: postData.title,
                content: postData.content,
                author: {
                    connect: { id: userId } 
                }
            }
        });
    }

    async readAll(): Promise<Post[]> {
        return await this.prisma.post.findMany();
    }

    async delete(id: number): Promise<Post> {
        return await this.prisma.post.delete({
            where: { id },
        });
    }

    async update(id: number, post: Partial<Post>): Promise<Post> {
        return await this.prisma.post.update({
            where: { id },
            data: post,
        });
    }
}
export type PostRepository = {
    create(post: Omit<Post, "id" | "deleted">, userId: number): Promise<Post>;
    readAll(): Promise<Post[]>;
    delete(id: number): Promise<Post>;
    update(id: number, postData: Partial<Post>): Promise<Post>;

}
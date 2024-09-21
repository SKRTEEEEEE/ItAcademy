export type PostRepository = {
    create(post: Omit<Post, "id">, userId: number): Promise<Post>;
    readAll(): Promise<Post[]>;
    delete(id: string): Promise<void>;
    update(id: string, postData: Partial<Post>): Promise<Post>;

}
import { User } from '../entities/User';

export interface UserRepository {
  create(user: Omit<User, 'id'>): Promise<User>;
  readById(id: number): Promise<User | null>;
  readByEmail(email: string): Promise<User | null>;
  readAll(): Promise<User[]>
  update(id: number, userData: Prisma.UserUpdateInput): Promise<User>;
  delete(id: number): Promise<void>;
}
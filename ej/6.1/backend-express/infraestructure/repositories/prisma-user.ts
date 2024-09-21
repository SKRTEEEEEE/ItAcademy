// backend/src/infrastructure/repositories/PrismaUserRepository.ts

import { Prisma, PrismaClient } from '@prisma/client';
import {UserRepository}from "../../../core/application/repositories/user"
import {User} from "../../../core/domain/entities/User"


// Me da por culo lo de parsear, he de recuperar el modelo de prisma

export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async create(userData: Omit<User, 'id'>): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: userData,
      });
      return this.mapPrismaUserToDomainUser(user);
    } catch (error) {
      this.handleError(error, 'Failed to create user');
    }
  }

  async readById(id: number): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      return user ? this.mapPrismaUserToDomainUser(user) : null;
    } catch (error) {
      this.handleError(error, 'Failed to find user by id');
    }
  }

  async readByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({ where: { email } });
      return user ? this.mapPrismaUserToDomainUser(user) : null;
    } catch (error) {
      this.handleError(error, 'Failed to find user by email');
    }
  }
    async readAll(): Promise<User[]> {
        try {
            const users = await this.prisma.user.findMany({ include: { posts: true } });
            return users.map(this.mapPrismaUserToDomainUser);
        } catch (error) {
            this.handleError(error, 'Failed to find all users');
        }
    }

    async update(id: number, userData: Prisma.UserUpdateInput): Promise<User> {
        try {
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: userData,
        });
        return this.mapPrismaUserToDomainUser(updatedUser);
        } catch (error) {
        this.handleError(error, 'Failed to update user');
        }
    }
  
  async delete(id: number): Promise<void> {
    try {
      await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      this.handleError(error, 'Failed to delete user');
    }
  }

  private mapPrismaUserToDomainUser(prismaUser: Prisma.UserGetPayload<{}>): User {
    return new User(
      prismaUser.id,
      prismaUser.email,
      prismaUser.name,
      prismaUser.role as 'USER' | 'ADMIN',
      prismaUser.banned
    );
  }

  private handleError(error: unknown, message: string): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error(`${message}: ${error.message} (Code: ${error.code})`);
    } else if (error instanceof Prisma.PrismaClientValidationError) {
      throw new Error(`${message}: ${error.message}`);
    } else if (error instanceof Error) {
      throw new Error(`${message}: ${error.message}`);
    } else {
      throw new Error(`${message}: An unknown error occurred`);
    }
  }
}
// core/src/domain/entities/User.ts

export class User {
    constructor(
      public id: number | null,
      public email: string,
      public name: string | null,
      public role: 'USER' | 'ADMIN' = 'USER',
      public banned: boolean = false
    ) {}
  }
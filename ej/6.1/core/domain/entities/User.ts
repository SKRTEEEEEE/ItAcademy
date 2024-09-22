// core/src/domain/entities/User.ts

export class User {
    constructor(
      public id: number,
      public email: string,
      public name: string | null,
      public role: string,
      public banned: boolean = false
    ) {}
  }
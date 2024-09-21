import { UserRepository } from "../../../application/repositories/user";
import { User } from "../../../domain/entities/User";
// import { User } from ".../../core/domain/entities/User";

abstract class UseCaseBase {
    constructor(protected userRepository: UserRepository){}
}

export class ReadAll extends UseCaseBase {
    async execute(): Promise<User[]> {
        return this.userRepository.readAll()
    }
}
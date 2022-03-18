import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "../dto/user.dto";
import { User } from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createAndSave(user: CreateUserDto): Promise<User> {
        const userData = this.create(user);
        return this.save(userData);
    }
}
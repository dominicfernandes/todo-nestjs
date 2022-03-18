import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository
    ) { }

    async createUser(userData: CreateUserDto): Promise<User> {
        return this.userRepository.createAndSave(userData);
    }

    // async getUsers(): Promise<User[]> {
    // }

    // async getUser(id: number): Promise<User> {

    // }

    // async updateUser(id: number, userData: UserDto): Promise<UpdateResult> {

    // }

    // async deleteUser(id: number): Promise<DeleteResult> {

    // }
}

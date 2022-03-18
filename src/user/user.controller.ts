import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { ServerError } from 'src/core/error.enum';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post('')
    async createuser(@Body() userData: CreateUserDto): Promise<any> {
        try {
            const user = await this.userService.createUser(userData);
            return user;
        } catch (error) {
            console.log(error)
            let message = 'Internal Server Error';
            if (error?.code == ServerError.DUPLICATE_ENTRY_ERROR) {
                message = `${userData.email} already exists`;
            }
            throw new InternalServerErrorException(message);
        }
    }
}

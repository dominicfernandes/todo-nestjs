import { IsEmail, IsNotEmpty, IsNumber, IsOptional, isString, IsString, Length } from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}

export class CreateUserDto extends UserDto {
    @IsString()
    @Length(6, 20)
    password: string;
}
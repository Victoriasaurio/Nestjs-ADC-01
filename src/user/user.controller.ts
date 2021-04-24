import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from "./model/user.model";
import { UserService } from './user.service';

@Controller('users') //ruta
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
        return this.userService.create(createUserDto);
    }

    @Get()
    async findAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }
}

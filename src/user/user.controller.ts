import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from "./model/user.model";

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

    // @Get(':id')
    // async findOneUser(@Param('id') id: string): Promise<User> {
    //     return this.userService.findOne(id);
    // }
}

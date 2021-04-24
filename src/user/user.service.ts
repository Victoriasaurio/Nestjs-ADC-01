import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './model/user.model'

const users: User[] = [];

@Injectable() //Provider para hacer una injección de dependecias. En automático.
export class UserService {
    //Inserta en el arreglo un nuevo usuario
    public create(userDto: CreateUserDto): void {
        users.push(new User(uuidv4(), userDto.name, userDto.username))
    }

    // Devuelve todos los User del Array
    public findAll(): User[] {
        return users;
    }
}

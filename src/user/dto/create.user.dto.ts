import { IsString, Length } from "class-validator";

// Recibe el usuario para ser creado en BD
export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    @Length(5, 15)
    username: string;
}

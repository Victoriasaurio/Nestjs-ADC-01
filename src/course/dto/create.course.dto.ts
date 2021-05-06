import { IsString, Length } from "class-validator";

export class CreateCourseDto {
    @IsString()
    name: string;

    @IsString()
    @Length(6)
    code: string;
}

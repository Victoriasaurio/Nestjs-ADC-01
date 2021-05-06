import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create.course.dto';
import { Course } from './model/course.model';

@Controller('users/:userId/courses')
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Post()
    async createCourse(@Body() createCourseDto: CreateCourseDto, @Param('userId') userId:string): Promise<void> {
        return this.courseService.create(createCourseDto, userId);
    }

    // @Get()
    // async findAllCourses(): Promise<Course[]> {
    //     return this.courseService.findAll();
    // }

    @Get()
    async findAllCoursesByUser(@Param('userId') userId:string): Promise<Course[]> {
        return this.courseService.findAllCourseByUser(userId);
    }

    @Get(':id')
    async findOne(@Param('userId') userId:string, @Param('id') id: string): Promise<Course> {
        return this.courseService.findOne(userId, id)
    }
}

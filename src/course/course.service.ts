import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from 'src/user/model/user.model';
import { UserService } from 'src/user/user.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateCourseDto } from './dto/create.course.dto';
import { Course } from './model/course.model';

const courses: Course[] = []

@Injectable()
export class CourseService {
    constructor(private userService: UserService){}
    public create(courseDto: CreateCourseDto, userId): void {
        const userArray: User[] = this.userService.findAll();
        let exist = false
        userArray.find(id => { 
            if(userId == id.id) {
                courses.push(new Course(uuidv4(), courseDto.name, courseDto.code, userId))
                exist = true
            } 
        })
        if(exist == false) throw new BadRequestException('User id doesnt exist!!')
    }

    // public findAll(): Course[] {
    //     return courses;
    // }

    public findAllCourseByUser(userId: string): Course[] {
        let coursesU: Course[] = [];
        let exist = false
        courses.find(userid => { 
            if(userId == userid.userId) {
                coursesU.push(userid); 
                exist = true; 
            }
        })
        if(exist == false) throw new BadRequestException('User id doesnt exist!!')
        return coursesU;
    }

    public findOne(userId:string, courseId: string): Course {
        let course: Course;
        let exist = false
        courses.find(arr => { if(userId == arr.userId) exist = true })
        if(exist == false) throw new BadRequestException('User id doesnt exist!!')
        courses.find(id => { if(courseId == id.id) course = id; });
        if(course == undefined) throw new BadRequestException('id doesnt exist!!')
        return course;
    }
}


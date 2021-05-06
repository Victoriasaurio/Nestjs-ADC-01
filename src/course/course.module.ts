import { CourseController } from './course.controller';
import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [UserService],
  controllers: [CourseController],
  providers: [CourseService, UserService],
})
export class CourseModule {}

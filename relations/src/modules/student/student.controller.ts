import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from 'src/common/dtos/studentDto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() student: StudentDto) {
    try {
      return await this.studentService.createStudent(student);
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get()
  async getAllStudent() {
    try {
      return await this.studentService.getAllStudent();
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/getstudent/:id')
  async getStudentById(@Param('id') id: number) {
    try {
      return await this.studentService.getStudentbyId(id);
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put('/update/:id')
  async updateStudent(@Body() studendto: StudentDto, @Param('id') id: number) {
    try {
      const updated = await this.updateStudent(studendto, id);
      if (updated) {
        return {
          message: 'Student updated successfully',
          status: true,
          result: updated,
        };
      }
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

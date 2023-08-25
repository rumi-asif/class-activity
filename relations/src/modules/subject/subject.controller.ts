import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectDto } from 'src/common/dtos/subjectDto';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  async createSubject(@Body() subject: SubjectDto) {
    const result = await this.subjectService.createStudentSubject(subject);
    try {
      if (result) {
        return {
          message: 'subject saved successfully',
          result: result,
        };
      }
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async getSubject() {
    try {
      const result = await this.subjectService.getSubject();
      return {
        message: 'subjects fetched successfully',
        result: result,
      };
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/getsubject/:id')
  async getSubjectById(@Param('id') id: number) {
    try {
      const result = await this.subjectService.getSubjectById(id);
      return {
        message: `The subject on ${result.id}`,
        result: result,
      };
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put('/update/:id')
  async updateOne(@Param('id') id: number, @Body() data: SubjectDto) {
    try {
      const result = await this.subjectService.updateOne(id, data);
      return {
        message: `the subject is updated`,
        result: result,
      };
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('/delete/:id')
  async deleteSubjectById(@Param('id') id: number) {
    try {
      const result = await this.subjectService.deleteSubjectById(id);
      return {
        message: `The subject on ${result.id}`,
        result: result,
      };
    } catch (error) {
      throw new HttpException(
        `Sorry! Something went wrong, ${error.message}`,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

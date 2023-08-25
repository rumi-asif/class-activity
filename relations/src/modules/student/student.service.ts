import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/common/entity/student.entity';
import { StudentDto } from 'src/common/dtos/studentDto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(student: StudentDto): Promise<any> {
    const user = await this.studentRepository.save(student);
    return {
      message: 'Student created successfully',
      result: user,
    };
  }

  async getAllStudent(): Promise<any> {
    const student = await this.studentRepository.find();
    return student;
  }

  async getStudentbyId(id: number): Promise<any> {
    const student = await this.studentRepository.findOne({ where: { id: id } });
    return student;
  }

  async updateStudent(studentdto, id: string) {
    const user = await this.studentRepository.update({ where: { id: id } },
      name: studentdto.name,
      name: studentdto.name,
      name: studentdto.name,

      );
    return user;
  }
}

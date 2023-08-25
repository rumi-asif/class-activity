import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from 'src/common/entity/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectrepository: Repository<Subject>,
  ) {}

  async createStudentSubject(data) {
    const subject = await this.subjectrepository.save(data);
    return subject;
  }

  async getSubject() {
    const subject = await this.subjectrepository.find();
    return subject;
  }

  async getSubjectById(id: number) {
    const subject = await this.subjectrepository.findOne({ where: { id: id } });
    return subject;
  }

  async updateOne(id: number, data) {
    const subject = await this.subjectrepository.update(id, data);
    return subject;
  }

  async deleteSubjectById(id: number) {
    const subject = await this.subjectrepository.findOne({ where: { id: id } });
    console.log(subject, 'if delete found');
    return subject;
  }
}

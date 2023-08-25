import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Class } from 'src/common/entity/class.entity';
import { ClassDto } from 'src/common/dtos/classDto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
  ) {}

  async createClass(data: ClassDto) {
    const sClass = await this.classRepository.save(data);
    return sClass;
  }

  async getAllclass() {
    const sClass = await this.classRepository.find();
    return sClass;
  }

  async getclassbyId(id: number): Promise<any> {
    const sClass = await this.classRepository.findOne({ where: { id: id } });
    return sClass;
  }
}

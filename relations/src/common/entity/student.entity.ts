// src/students/student.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Class } from './class.entity';
import { Subject } from './subject.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  father_name: string;

  @Column()
  age: number;

  @Column()
  contact_number: string;

  @Column({ unique: true })
  email: string;

  @ManyToOne(() => Class, (class1) => class1.id)
  @JoinColumn()
  class: Class;

  @OneToOne(() => Subject)
  @JoinColumn()
  subject: Subject;
}

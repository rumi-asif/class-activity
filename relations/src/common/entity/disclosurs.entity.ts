import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApplicationRequirements } from './requirment.entity';
@Entity()
export class Disclosures {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({ type: 'json' })
  values: object[];
  @Column()
  description: string;
  @Column()
  company_id: number;
  @Column()
  status: number;
  @Column()
  parent_id: number;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;
  @OneToOne(() => Disclosures)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  disclosure: Disclosures;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @OneToOne(() => ApplicationRequirements)
  @JoinColumn({
    name: 'application_requirements_id, ',
    referencedColumnName: 'id',
  })
  applicationRequirement: ApplicationRequirements;
}

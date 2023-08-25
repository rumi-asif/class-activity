import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
@Entity()
export class ApplicationRequirements {
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
  @OneToOne(() => ApplicationRequirements)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  disclosure: ApplicationRequirements;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Apiary } from '../apiaries/apiaries.entity';

@Entity('hives')
export class Hive {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  status: string;

  @ManyToOne(() => Apiary, (apiary) => apiary.hives, { onDelete: 'CASCADE' })
  apiary: Apiary;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Hive } from '../hives/hives.entity';

@Entity('inspections')
export class Inspection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //@ManyToOne(() => Hive, (hive) => hive.inspections, { onDelete: 'CASCADE' })
  //hive: Hive;

  @Column()
  date: Date;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  actions: string;
}
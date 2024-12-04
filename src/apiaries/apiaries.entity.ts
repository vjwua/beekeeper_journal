import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Hive } from '../hives/hives.entity';

@Entity('apiaries')
export class Apiary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Hive, (hive) => hive.apiary)
  hives: Hive[];
}

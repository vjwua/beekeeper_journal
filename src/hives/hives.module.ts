import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HivesService } from './hives.service';
import { HivesController } from './hives.controller';
import { Hive } from './hives.entity';
import { Apiary } from '../apiaries/apiaries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hive, Apiary])],
  providers: [HivesService],
  controllers: [HivesController],
})
export class HivesModule {}

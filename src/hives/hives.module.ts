import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HivesService } from './hives.service';
import { HivesController } from './hives.controller';
import { Hive } from './hives.entity';
import { Apiary } from '../apiaries/apiaries.entity';
import { ApiariesService } from 'src/apiaries/apiaries.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hive, Apiary])],
  providers: [HivesService, ApiariesService],
  controllers: [HivesController],
})
export class HivesModule {}

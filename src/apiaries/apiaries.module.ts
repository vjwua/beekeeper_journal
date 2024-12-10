import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiariesController } from './apiaries.controller';
import { ApiariesService } from './apiaries.service';
import { Hive } from '../hives/hives.entity';
import { Apiary } from './apiaries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apiary, Hive])],
  controllers: [ApiariesController],
  providers: [ApiariesService]
})
export class ApiariesModule {}

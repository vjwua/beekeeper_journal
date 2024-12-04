import { Module } from '@nestjs/common';
import { SController } from './s/s.controller';
import { InspectionsController } from './inspections.controller';
import { InspectionsService } from './inspections.service';

@Module({
  controllers: [SController, InspectionsController],
  providers: [InspectionsService]
})
export class InspectionsModule {}

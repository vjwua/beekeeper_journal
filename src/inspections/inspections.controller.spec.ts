import { Test, TestingModule } from '@nestjs/testing';
import { InspectionsController } from './inspections.controller';

describe('InspectionsController', () => {
  let controller: InspectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InspectionsController],
    }).compile();

    controller = module.get<InspectionsController>(InspectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

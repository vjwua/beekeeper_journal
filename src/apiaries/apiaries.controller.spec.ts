import { Test, TestingModule } from '@nestjs/testing';
import { ApiariesController } from './apiaries.controller';

describe('ApiariesController', () => {
  let controller: ApiariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiariesController],
    }).compile();

    controller = module.get<ApiariesController>(ApiariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

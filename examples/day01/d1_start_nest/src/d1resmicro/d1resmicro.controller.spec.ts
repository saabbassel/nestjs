import { Test, TestingModule } from '@nestjs/testing';
import { D1resmicroController } from './d1resmicro.controller';
import { D1resmicroService } from './d1resmicro.service';

describe('D1resmicroController', () => {
  let controller: D1resmicroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [D1resmicroController],
      providers: [D1resmicroService],
    }).compile();

    controller = module.get<D1resmicroController>(D1resmicroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

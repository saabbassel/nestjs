import { Test, TestingModule } from '@nestjs/testing';
import { D1resController } from './d1res.controller';
import { D1resService } from './d1res.service';

describe('D1resController', () => {
  let controller: D1resController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [D1resController],
      providers: [D1resService],
    }).compile();

    controller = module.get<D1resController>(D1resController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

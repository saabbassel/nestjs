import { Test, TestingModule } from '@nestjs/testing';
import { D1Controller } from './d1.controller';

describe('D1Controller', () => {
  let controller: D1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [D1Controller],
    }).compile();

    controller = module.get<D1Controller>(D1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

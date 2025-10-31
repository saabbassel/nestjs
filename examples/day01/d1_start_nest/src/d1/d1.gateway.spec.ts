import { Test, TestingModule } from '@nestjs/testing';
import { D1Gateway } from './d1.gateway';

describe('D1Gateway', () => {
  let gateway: D1Gateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1Gateway],
    }).compile();

    gateway = module.get<D1Gateway>(D1Gateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

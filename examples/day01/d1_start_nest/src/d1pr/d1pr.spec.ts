import { Test, TestingModule } from '@nestjs/testing';
import { D1pr } from './d1pr';

describe('D1pr', () => {
  let provider: D1pr;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1pr],
    }).compile();

    provider = module.get<D1pr>(D1pr);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

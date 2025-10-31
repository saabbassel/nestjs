import { Test, TestingModule } from '@nestjs/testing';
import { D1Resolver } from './d1.resolver';

describe('D1Resolver', () => {
  let resolver: D1Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1Resolver],
    }).compile();

    resolver = module.get<D1Resolver>(D1Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

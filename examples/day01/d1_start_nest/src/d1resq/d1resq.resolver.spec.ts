import { Test, TestingModule } from '@nestjs/testing';
import { D1resqResolver } from './d1resq.resolver';
import { D1resqService } from './d1resq.service';

describe('D1resqResolver', () => {
  let resolver: D1resqResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1resqResolver, D1resqService],
    }).compile();

    resolver = module.get<D1resqResolver>(D1resqResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { D1resqschemaResolver } from './d1resqschema.resolver';
import { D1resqschemaService } from './d1resqschema.service';

describe('D1resqschemaResolver', () => {
  let resolver: D1resqschemaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1resqschemaResolver, D1resqschemaService],
    }).compile();

    resolver = module.get<D1resqschemaResolver>(D1resqschemaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

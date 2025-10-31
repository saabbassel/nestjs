import { Test, TestingModule } from '@nestjs/testing';
import { D1Service } from './d1.service';

describe('D1Service', () => {
  let service: D1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1Service],
    }).compile();

    service = module.get<D1Service>(D1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

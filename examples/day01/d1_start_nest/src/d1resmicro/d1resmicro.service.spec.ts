import { Test, TestingModule } from '@nestjs/testing';
import { D1resmicroService } from './d1resmicro.service';

describe('D1resmicroService', () => {
  let service: D1resmicroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1resmicroService],
    }).compile();

    service = module.get<D1resmicroService>(D1resmicroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

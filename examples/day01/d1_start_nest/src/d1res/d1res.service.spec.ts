import { Test, TestingModule } from '@nestjs/testing';
import { D1resService } from './d1res.service';

describe('D1resService', () => {
  let service: D1resService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1resService],
    }).compile();

    service = module.get<D1resService>(D1resService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { D1resqService } from './d1resq.service';

describe('D1resqService', () => {
  let service: D1resqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1resqService],
    }).compile();

    service = module.get<D1resqService>(D1resqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

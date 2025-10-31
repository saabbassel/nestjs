import { Test, TestingModule } from '@nestjs/testing';
import { D1libService } from './d1lib.service';

describe('D1libService', () => {
  let service: D1libService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1libService],
    }).compile();

    service = module.get<D1libService>(D1libService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

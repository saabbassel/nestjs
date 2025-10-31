import { Test, TestingModule } from '@nestjs/testing';
import { D1ressocketService } from './d1ressocket.service';

describe('D1ressocketService', () => {
  let service: D1ressocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1ressocketService],
    }).compile();

    service = module.get<D1ressocketService>(D1ressocketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

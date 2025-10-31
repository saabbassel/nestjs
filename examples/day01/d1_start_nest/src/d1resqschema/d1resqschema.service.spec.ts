import { Test, TestingModule } from '@nestjs/testing';
import { D1resqschemaService } from './d1resqschema.service';

describe('D1resqschemaService', () => {
  let service: D1resqschemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1resqschemaService],
    }).compile();

    service = module.get<D1resqschemaService>(D1resqschemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

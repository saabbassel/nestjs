import { Test, TestingModule } from '@nestjs/testing';
import { D1ressocketGateway } from './d1ressocket.gateway';
import { D1ressocketService } from './d1ressocket.service';

describe('D1ressocketGateway', () => {
  let gateway: D1ressocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [D1ressocketGateway, D1ressocketService],
    }).compile();

    gateway = module.get<D1ressocketGateway>(D1ressocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

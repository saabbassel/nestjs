import { Module } from '@nestjs/common';
import { D1ressocketService } from './d1ressocket.service';
import { D1ressocketGateway } from './d1ressocket.gateway';

@Module({
  providers: [D1ressocketGateway, D1ressocketService],
})
export class D1ressocketModule {}

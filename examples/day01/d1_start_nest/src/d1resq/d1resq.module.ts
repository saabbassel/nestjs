import { Module } from '@nestjs/common';
import { D1resqService } from './d1resq.service';
import { D1resqResolver } from './d1resq.resolver';

@Module({
  providers: [D1resqResolver, D1resqService],
})
export class D1resqModule {}

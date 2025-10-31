import { Module } from '@nestjs/common';
import { D1resmicroService } from './d1resmicro.service';
import { D1resmicroController } from './d1resmicro.controller';

@Module({
  controllers: [D1resmicroController],
  providers: [D1resmicroService],
})
export class D1resmicroModule {}

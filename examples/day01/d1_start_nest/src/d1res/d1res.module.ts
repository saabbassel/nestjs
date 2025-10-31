import { Module } from '@nestjs/common';
import { D1resService } from './d1res.service';
import { D1resController } from './d1res.controller';

@Module({
  controllers: [D1resController],
  providers: [D1resService],
})
export class D1resModule {}

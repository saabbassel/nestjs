import { Module } from '@nestjs/common';
import { D1libService } from './d1lib.service';

@Module({
  providers: [D1libService],
  exports: [D1libService],
})
export class D1libModule {}

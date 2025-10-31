import { Module } from '@nestjs/common';
import { D1resqschemaService } from './d1resqschema.service';
import { D1resqschemaResolver } from './d1resqschema.resolver';

@Module({
  providers: [D1resqschemaResolver, D1resqschemaService],
})
export class D1resqschemaModule {}

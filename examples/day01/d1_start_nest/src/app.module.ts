import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { D1resmicroModule } from './d1resmicro/d1resmicro.module';
import { D1ressocketModule } from './d1ressocket/d1ressocket.module';
import { D1resqschemaModule } from './d1resqschema/d1resqschema.module';
import { D1resqModule } from './d1resq/d1resq.module';
import { D1pr } from './d1pr/d1pr';
import { D1Module } from './d1/d1.module';
import { D1resModule } from './d1res/d1res.module';
import { D1Resolver } from './d1/d1.resolver';
import { D1Controller } from './d1/d1.controller';
import { D1Gateway } from './d1/d1.gateway';
import { D1Service } from './d1/d1.service';

@Module({
  imports: [D1resModule, D1Module, D1resqModule, D1resqschemaModule, D1ressocketModule, D1resmicroModule],
  controllers: [AppController, D1Controller],
  providers: [AppService, D1Service, D1Gateway, D1Resolver, D1pr],
})
export class AppModule {}

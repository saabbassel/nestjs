import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { D1resmicroService } from './d1resmicro.service';
import { CreateD1resmicroDto } from './dto/create-d1resmicro.dto';
import { UpdateD1resmicroDto } from './dto/update-d1resmicro.dto';

@Controller()
export class D1resmicroController {
  constructor(private readonly d1resmicroService: D1resmicroService) {}

  @MessagePattern('createD1resmicro')
  create(@Payload() createD1resmicroDto: CreateD1resmicroDto) {
    return this.d1resmicroService.create(createD1resmicroDto);
  }

  @MessagePattern('findAllD1resmicro')
  findAll() {
    return this.d1resmicroService.findAll();
  }

  @MessagePattern('findOneD1resmicro')
  findOne(@Payload() id: number) {
    return this.d1resmicroService.findOne(id);
  }

  @MessagePattern('updateD1resmicro')
  update(@Payload() updateD1resmicroDto: UpdateD1resmicroDto) {
    return this.d1resmicroService.update(updateD1resmicroDto.id, updateD1resmicroDto);
  }

  @MessagePattern('removeD1resmicro')
  remove(@Payload() id: number) {
    return this.d1resmicroService.remove(id);
  }
}

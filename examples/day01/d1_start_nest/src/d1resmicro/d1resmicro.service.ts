import { Injectable } from '@nestjs/common';
import { CreateD1resmicroDto } from './dto/create-d1resmicro.dto';
import { UpdateD1resmicroDto } from './dto/update-d1resmicro.dto';

@Injectable()
export class D1resmicroService {
  create(createD1resmicroDto: CreateD1resmicroDto) {
    return 'This action adds a new d1resmicro';
  }

  findAll() {
    return `This action returns all d1resmicro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} d1resmicro`;
  }

  update(id: number, updateD1resmicroDto: UpdateD1resmicroDto) {
    return `This action updates a #${id} d1resmicro`;
  }

  remove(id: number) {
    return `This action removes a #${id} d1resmicro`;
  }
}

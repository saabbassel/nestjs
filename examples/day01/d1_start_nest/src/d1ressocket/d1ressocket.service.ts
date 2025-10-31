import { Injectable } from '@nestjs/common';
import { CreateD1ressocketDto } from './dto/create-d1ressocket.dto';
import { UpdateD1ressocketDto } from './dto/update-d1ressocket.dto';

@Injectable()
export class D1ressocketService {
  create(createD1ressocketDto: CreateD1ressocketDto) {
    return 'This action adds a new d1ressocket';
  }

  findAll() {
    return `This action returns all d1ressocket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} d1ressocket`;
  }

  update(id: number, updateD1ressocketDto: UpdateD1ressocketDto) {
    return `This action updates a #${id} d1ressocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} d1ressocket`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateD1resqInput } from './dto/create-d1resq.input';
import { UpdateD1resqInput } from './dto/update-d1resq.input';

@Injectable()
export class D1resqService {
  create(createD1resqInput: CreateD1resqInput) {
    return 'This action adds a new d1resq';
  }

  findAll() {
    return `This action returns all d1resq`;
  }

  findOne(id: number) {
    return `This action returns a #${id} d1resq`;
  }

  update(id: number, updateD1resqInput: UpdateD1resqInput) {
    return `This action updates a #${id} d1resq`;
  }

  remove(id: number) {
    return `This action removes a #${id} d1resq`;
  }
}

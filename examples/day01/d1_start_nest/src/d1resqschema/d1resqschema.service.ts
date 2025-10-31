import { Injectable } from '@nestjs/common';
import { CreateD1resqschemaInput } from './dto/create-d1resqschema.input';
import { UpdateD1resqschemaInput } from './dto/update-d1resqschema.input';

@Injectable()
export class D1resqschemaService {
  create(createD1resqschemaInput: CreateD1resqschemaInput) {
    return 'This action adds a new d1resqschema';
  }

  findAll() {
    return `This action returns all d1resqschema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} d1resqschema`;
  }

  update(id: number, updateD1resqschemaInput: UpdateD1resqschemaInput) {
    return `This action updates a #${id} d1resqschema`;
  }

  remove(id: number) {
    return `This action removes a #${id} d1resqschema`;
  }
}

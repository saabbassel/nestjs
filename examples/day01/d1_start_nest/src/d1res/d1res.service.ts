import { Injectable } from '@nestjs/common';
import { CreateD1reDto } from './dto/create-d1re.dto';
import { UpdateD1reDto } from './dto/update-d1re.dto';

@Injectable()
export class D1resService {
  create(createD1reDto: CreateD1reDto) {
    return 'This action adds a new d1re';
  }

  findAll() {
    return `This action returns all d1res`;
  }

  findOne(id: number) {
    return `This action returns a #${id} d1re`;
  }

  update(id: number, updateD1reDto: UpdateD1reDto) {
    return `This action updates a #${id} d1re`;
  }

  remove(id: number) {
    return `This action removes a #${id} d1re`;
  }
}

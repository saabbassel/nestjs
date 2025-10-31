import { PartialType } from '@nestjs/mapped-types';
import { CreateD1ressocketDto } from './create-d1ressocket.dto';

export class UpdateD1ressocketDto extends PartialType(CreateD1ressocketDto) {
  id: number;
}

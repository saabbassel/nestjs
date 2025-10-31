import { PartialType } from '@nestjs/mapped-types';
import { CreateD1resmicroDto } from './create-d1resmicro.dto';

export class UpdateD1resmicroDto extends PartialType(CreateD1resmicroDto) {
  id: number;
}

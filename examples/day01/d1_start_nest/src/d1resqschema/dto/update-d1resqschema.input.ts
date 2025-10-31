import { CreateD1resqschemaInput } from './create-d1resqschema.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateD1resqschemaInput extends PartialType(CreateD1resqschemaInput) {
  id: number;
}

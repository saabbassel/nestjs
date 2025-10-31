import { PartialType } from '@nestjs/mapped-types';
import { CreateD1reDto } from './create-d1re.dto';

export class UpdateD1reDto extends PartialType(CreateD1reDto) {}

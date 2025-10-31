import { CreateD1resqInput } from './create-d1resq.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateD1resqInput extends PartialType(CreateD1resqInput) {
  @Field(() => Int)
  id: number;
}

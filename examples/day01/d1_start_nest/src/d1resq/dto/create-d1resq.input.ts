import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateD1resqInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

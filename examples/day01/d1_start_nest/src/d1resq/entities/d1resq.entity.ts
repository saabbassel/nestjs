import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class D1resq {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

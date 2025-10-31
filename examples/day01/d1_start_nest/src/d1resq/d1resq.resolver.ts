import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { D1resqService } from './d1resq.service';
import { D1resq } from './entities/d1resq.entity';
import { CreateD1resqInput } from './dto/create-d1resq.input';
import { UpdateD1resqInput } from './dto/update-d1resq.input';

@Resolver(() => D1resq)
export class D1resqResolver {
  constructor(private readonly d1resqService: D1resqService) {}

  @Mutation(() => D1resq)
  createD1resq(@Args('createD1resqInput') createD1resqInput: CreateD1resqInput) {
    return this.d1resqService.create(createD1resqInput);
  }

  @Query(() => [D1resq], { name: 'd1resq' })
  findAll() {
    return this.d1resqService.findAll();
  }

  @Query(() => D1resq, { name: 'd1resq' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.d1resqService.findOne(id);
  }

  @Mutation(() => D1resq)
  updateD1resq(@Args('updateD1resqInput') updateD1resqInput: UpdateD1resqInput) {
    return this.d1resqService.update(updateD1resqInput.id, updateD1resqInput);
  }

  @Mutation(() => D1resq)
  removeD1resq(@Args('id', { type: () => Int }) id: number) {
    return this.d1resqService.remove(id);
  }
}

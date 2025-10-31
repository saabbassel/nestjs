import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { D1resqschemaService } from './d1resqschema.service';
import { CreateD1resqschemaInput } from './dto/create-d1resqschema.input';
import { UpdateD1resqschemaInput } from './dto/update-d1resqschema.input';

@Resolver('D1resqschema')
export class D1resqschemaResolver {
  constructor(private readonly d1resqschemaService: D1resqschemaService) {}

  @Mutation('createD1resqschema')
  create(@Args('createD1resqschemaInput') createD1resqschemaInput: CreateD1resqschemaInput) {
    return this.d1resqschemaService.create(createD1resqschemaInput);
  }

  @Query('d1resqschema')
  findAll() {
    return this.d1resqschemaService.findAll();
  }

  @Query('d1resqschema')
  findOne(@Args('id') id: number) {
    return this.d1resqschemaService.findOne(id);
  }

  @Mutation('updateD1resqschema')
  update(@Args('updateD1resqschemaInput') updateD1resqschemaInput: UpdateD1resqschemaInput) {
    return this.d1resqschemaService.update(updateD1resqschemaInput.id, updateD1resqschemaInput);
  }

  @Mutation('removeD1resqschema')
  remove(@Args('id') id: number) {
    return this.d1resqschemaService.remove(id);
  }
}

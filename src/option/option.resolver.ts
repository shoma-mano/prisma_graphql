import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { OptionService } from './option.service';
import { DetailService } from '../details/detail.service';
import { Option } from './entities/option.entity';
import { CreateOptionInput } from './dto/create-option.input';
import { UpdateOptionInput } from './dto/update-option.input';

@Resolver(() => Option)
export class OptionResolver {
  constructor(
    private readonly optionService: OptionService,
    private readonly detailService: DetailService,
  ) {}

  @Mutation(() => Option)
  createOption(
    @Args('createOptionInput') createOptionInput: CreateOptionInput,
  ) {
    return this.optionService.create(createOptionInput);
  }

  @Query(() => [Option], { name: 'options' })
  findAll() {
    return this.optionService.findAll();
  }

  @Query(() => Option, { name: 'option' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.optionService.findOne(id);
  }

  @Mutation(() => Option)
  updateOption(
    @Args('updateOptionInput') updateOptionInput: UpdateOptionInput,
  ) {
    return this.optionService.update(updateOptionInput.id, updateOptionInput);
  }

  @Mutation(() => Option)
  removeOption(@Args('id', { type: () => Int }) id: number) {
    return this.optionService.remove(id);
  }

  @ResolveField()
  async details(@Parent() option: Option) {
    return this.detailService.findByOptionID(Number(option.id));
  }
}

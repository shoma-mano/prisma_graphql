import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionCreateInput } from './option-create.input';

@ArgsType()
export class CreateOneOptionArgs {

    @Field(() => OptionCreateInput, {nullable:false})
    data!: OptionCreateInput;
}

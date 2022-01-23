import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionUpdateInput } from './option-update.input';
import { OptionWhereUniqueInput } from './option-where-unique.input';

@ArgsType()
export class UpdateOneOptionArgs {

    @Field(() => OptionUpdateInput, {nullable:false})
    data!: OptionUpdateInput;

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    where!: OptionWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { OptionCreateInput } from './option-create.input';
import { OptionUpdateInput } from './option-update.input';

@ArgsType()
export class UpsertOneOptionArgs {

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    where!: OptionWhereUniqueInput;

    @Field(() => OptionCreateInput, {nullable:false})
    create!: OptionCreateInput;

    @Field(() => OptionUpdateInput, {nullable:false})
    update!: OptionUpdateInput;
}

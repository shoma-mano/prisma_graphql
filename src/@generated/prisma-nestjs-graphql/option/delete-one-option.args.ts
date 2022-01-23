import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionWhereUniqueInput } from './option-where-unique.input';

@ArgsType()
export class DeleteOneOptionArgs {

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    where!: OptionWhereUniqueInput;
}

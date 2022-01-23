import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { OptionCreateWithoutDetailsInput } from './option-create-without-details.input';

@InputType()
export class OptionCreateOrConnectWithoutDetailsInput {

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    where!: OptionWhereUniqueInput;

    @Field(() => OptionCreateWithoutDetailsInput, {nullable:false})
    create!: OptionCreateWithoutDetailsInput;
}

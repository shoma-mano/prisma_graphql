import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateWithoutDetailsInput } from './option-create-without-details.input';
import { OptionCreateOrConnectWithoutDetailsInput } from './option-create-or-connect-without-details.input';
import { OptionWhereUniqueInput } from './option-where-unique.input';

@InputType()
export class OptionCreateNestedOneWithoutDetailsInput {

    @Field(() => OptionCreateWithoutDetailsInput, {nullable:true})
    create?: OptionCreateWithoutDetailsInput;

    @Field(() => OptionCreateOrConnectWithoutDetailsInput, {nullable:true})
    connectOrCreate?: OptionCreateOrConnectWithoutDetailsInput;

    @Field(() => OptionWhereUniqueInput, {nullable:true})
    connect?: OptionWhereUniqueInput;
}

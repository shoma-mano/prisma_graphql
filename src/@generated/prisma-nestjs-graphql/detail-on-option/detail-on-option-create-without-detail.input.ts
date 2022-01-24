import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateNestedOneWithoutDetailsInput } from '../option/option-create-nested-one-without-details.input';

@InputType()
export class DetailOnOptionCreateWithoutDetailInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => OptionCreateNestedOneWithoutDetailsInput, {nullable:false})
    option!: OptionCreateNestedOneWithoutDetailsInput;
}

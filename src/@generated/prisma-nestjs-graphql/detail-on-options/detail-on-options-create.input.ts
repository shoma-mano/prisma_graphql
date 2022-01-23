import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateNestedOneWithoutDetailsInput } from '../option/option-create-nested-one-without-details.input';
import { DetailCreateNestedOneWithoutOptionsInput } from '../detail/detail-create-nested-one-without-options.input';

@InputType()
export class DetailOnOptionsCreateInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => OptionCreateNestedOneWithoutDetailsInput, {nullable:false})
    option!: OptionCreateNestedOneWithoutDetailsInput;

    @Field(() => DetailCreateNestedOneWithoutOptionsInput, {nullable:false})
    detail!: DetailCreateNestedOneWithoutOptionsInput;
}

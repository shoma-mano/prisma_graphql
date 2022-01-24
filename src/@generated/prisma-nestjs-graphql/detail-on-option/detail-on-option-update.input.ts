import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionUpdateOneRequiredWithoutDetailsInput } from '../option/option-update-one-required-without-details.input';
import { DetailUpdateOneRequiredWithoutOptionsInput } from '../detail/detail-update-one-required-without-options.input';

@InputType()
export class DetailOnOptionUpdateInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:true})
    assignedBy?: string;

    @Field(() => OptionUpdateOneRequiredWithoutDetailsInput, {nullable:true})
    option?: OptionUpdateOneRequiredWithoutDetailsInput;

    @Field(() => DetailUpdateOneRequiredWithoutOptionsInput, {nullable:true})
    detail?: DetailUpdateOneRequiredWithoutOptionsInput;
}

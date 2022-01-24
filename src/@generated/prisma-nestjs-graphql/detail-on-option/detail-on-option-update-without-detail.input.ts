import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionUpdateOneRequiredWithoutDetailsInput } from '../option/option-update-one-required-without-details.input';

@InputType()
export class DetailOnOptionUpdateWithoutDetailInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:true})
    assignedBy?: string;

    @Field(() => OptionUpdateOneRequiredWithoutDetailsInput, {nullable:true})
    option?: OptionUpdateOneRequiredWithoutDetailsInput;
}

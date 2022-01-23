import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUpdateOneRequiredWithoutOptionsInput } from '../detail/detail-update-one-required-without-options.input';

@InputType()
export class DetailOnOptionsUpdateWithoutOptionInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:true})
    assignedBy?: string;

    @Field(() => DetailUpdateOneRequiredWithoutOptionsInput, {nullable:true})
    detail?: DetailUpdateOneRequiredWithoutOptionsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionUpdateManyWithoutOptionInput } from '../detail-on-option/detail-on-option-update-many-without-option.input';

@InputType()
export class OptionUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => DetailOnOptionUpdateManyWithoutOptionInput, {nullable:true})
    details?: DetailOnOptionUpdateManyWithoutOptionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionUncheckedUpdateManyWithoutOptionInput } from '../detail-on-option/detail-on-option-unchecked-update-many-without-option.input';

@InputType()
export class OptionUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => DetailOnOptionUncheckedUpdateManyWithoutOptionInput, {nullable:true})
    details?: DetailOnOptionUncheckedUpdateManyWithoutOptionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionsUncheckedUpdateManyWithoutOptionInput } from '../detail-on-options/detail-on-options-unchecked-update-many-without-option.input';

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

    @Field(() => DetailOnOptionsUncheckedUpdateManyWithoutOptionInput, {nullable:true})
    details?: DetailOnOptionsUncheckedUpdateManyWithoutOptionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionsUncheckedCreateNestedManyWithoutOptionInput } from '../detail-on-options/detail-on-options-unchecked-create-nested-many-without-option.input';

@InputType()
export class OptionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DetailOnOptionsUncheckedCreateNestedManyWithoutOptionInput, {nullable:true})
    details?: DetailOnOptionsUncheckedCreateNestedManyWithoutOptionInput;
}

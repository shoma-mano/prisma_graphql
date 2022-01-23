import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionsUncheckedCreateNestedManyWithoutDetailInput } from '../detail-on-options/detail-on-options-unchecked-create-nested-many-without-detail.input';

@InputType()
export class DetailUncheckedCreateWithoutMenuInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    sentence!: string;

    @Field(() => DetailOnOptionsUncheckedCreateNestedManyWithoutDetailInput, {nullable:true})
    options?: DetailOnOptionsUncheckedCreateNestedManyWithoutDetailInput;
}
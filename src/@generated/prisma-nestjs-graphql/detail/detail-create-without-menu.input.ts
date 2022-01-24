import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionCreateNestedManyWithoutDetailInput } from '../detail-on-option/detail-on-option-create-nested-many-without-detail.input';

@InputType()
export class DetailCreateWithoutMenuInput {

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

    @Field(() => DetailOnOptionCreateNestedManyWithoutDetailInput, {nullable:true})
    options?: DetailOnOptionCreateNestedManyWithoutDetailInput;
}

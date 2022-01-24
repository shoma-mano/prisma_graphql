import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionUncheckedUpdateManyWithoutDetailInput } from '../detail-on-option/detail-on-option-unchecked-update-many-without-detail.input';

@InputType()
export class DetailUncheckedUpdateWithoutItemInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:true})
    sentence?: string;

    @Field(() => DetailOnOptionUncheckedUpdateManyWithoutDetailInput, {nullable:true})
    options?: DetailOnOptionUncheckedUpdateManyWithoutDetailInput;
}

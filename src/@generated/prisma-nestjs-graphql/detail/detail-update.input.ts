import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MenuUpdateOneWithoutDetailInput } from '../menu/menu-update-one-without-detail.input';
import { DetailOnOptionsUpdateManyWithoutDetailInput } from '../detail-on-options/detail-on-options-update-many-without-detail.input';

@InputType()
export class DetailUpdateInput {

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

    @Field(() => MenuUpdateOneWithoutDetailInput, {nullable:true})
    menu?: MenuUpdateOneWithoutDetailInput;

    @Field(() => DetailOnOptionsUpdateManyWithoutDetailInput, {nullable:true})
    options?: DetailOnOptionsUpdateManyWithoutDetailInput;
}

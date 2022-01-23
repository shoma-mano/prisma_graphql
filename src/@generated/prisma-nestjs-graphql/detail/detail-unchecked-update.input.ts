import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MenuUncheckedUpdateOneWithoutDetailInput } from '../menu/menu-unchecked-update-one-without-detail.input';
import { DetailOnOptionsUncheckedUpdateManyWithoutDetailInput } from '../detail-on-options/detail-on-options-unchecked-update-many-without-detail.input';

@InputType()
export class DetailUncheckedUpdateInput {

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

    @Field(() => MenuUncheckedUpdateOneWithoutDetailInput, {nullable:true})
    menu?: MenuUncheckedUpdateOneWithoutDetailInput;

    @Field(() => DetailOnOptionsUncheckedUpdateManyWithoutDetailInput, {nullable:true})
    options?: DetailOnOptionsUncheckedUpdateManyWithoutDetailInput;
}

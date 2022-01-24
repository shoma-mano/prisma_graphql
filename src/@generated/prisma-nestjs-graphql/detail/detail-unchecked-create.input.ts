import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MenuUncheckedCreateNestedOneWithoutDetailInput } from '../menu/menu-unchecked-create-nested-one-without-detail.input';
import { DetailOnOptionUncheckedCreateNestedManyWithoutDetailInput } from '../detail-on-option/detail-on-option-unchecked-create-nested-many-without-detail.input';

@InputType()
export class DetailUncheckedCreateInput {

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

    @Field(() => MenuUncheckedCreateNestedOneWithoutDetailInput, {nullable:true})
    menu?: MenuUncheckedCreateNestedOneWithoutDetailInput;

    @Field(() => DetailOnOptionUncheckedCreateNestedManyWithoutDetailInput, {nullable:true})
    options?: DetailOnOptionUncheckedCreateNestedManyWithoutDetailInput;
}

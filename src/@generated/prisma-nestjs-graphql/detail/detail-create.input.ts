import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MenuCreateNestedOneWithoutDetailInput } from '../menu/menu-create-nested-one-without-detail.input';
import { DetailOnOptionsCreateNestedManyWithoutDetailInput } from '../detail-on-options/detail-on-options-create-nested-many-without-detail.input';

@InputType()
export class DetailCreateInput {

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

    @Field(() => MenuCreateNestedOneWithoutDetailInput, {nullable:true})
    menu?: MenuCreateNestedOneWithoutDetailInput;

    @Field(() => DetailOnOptionsCreateNestedManyWithoutDetailInput, {nullable:true})
    options?: DetailOnOptionsCreateNestedManyWithoutDetailInput;
}

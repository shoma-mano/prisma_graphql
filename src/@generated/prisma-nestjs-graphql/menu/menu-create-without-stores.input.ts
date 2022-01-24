import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateNestedOneWithoutMenuInput } from '../detail/detail-create-nested-one-without-menu.input';

@InputType()
export class MenuCreateWithoutStoresInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => DetailCreateNestedOneWithoutMenuInput, {nullable:true})
    detail?: DetailCreateNestedOneWithoutMenuInput;
}

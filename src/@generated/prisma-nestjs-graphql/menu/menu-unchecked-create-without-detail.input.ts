import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StoresOnMenusUncheckedCreateNestedManyWithoutMenuInput } from '../stores-on-menus/stores-on-menus-unchecked-create-nested-many-without-menu.input';

@InputType()
export class MenuUncheckedCreateWithoutDetailInput {

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

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => StoresOnMenusUncheckedCreateNestedManyWithoutMenuInput, {nullable:true})
    stores?: StoresOnMenusUncheckedCreateNestedManyWithoutMenuInput;
}

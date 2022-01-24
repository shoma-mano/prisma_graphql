import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusCreateNestedManyWithoutMenuInput } from '../stores-on-menus/stores-on-menus-create-nested-many-without-menu.input';

@InputType()
export class MenuCreateWithoutDetailInput {

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

    @Field(() => StoresOnMenusCreateNestedManyWithoutMenuInput, {nullable:true})
    stores?: StoresOnMenusCreateNestedManyWithoutMenuInput;
}

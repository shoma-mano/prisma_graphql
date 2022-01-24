import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StoresOnMenusUncheckedUpdateManyWithoutMenuInput } from '../stores-on-menus/stores-on-menus-unchecked-update-many-without-menu.input';

@InputType()
export class MenuUncheckedUpdateWithoutDetailInput {

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

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => StoresOnMenusUncheckedUpdateManyWithoutMenuInput, {nullable:true})
    stores?: StoresOnMenusUncheckedUpdateManyWithoutMenuInput;
}

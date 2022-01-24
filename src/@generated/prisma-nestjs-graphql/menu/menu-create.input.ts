import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateNestedOneWithoutMenuInput } from '../detail/detail-create-nested-one-without-menu.input';
import { StoresOnMenusCreateNestedManyWithoutMenuInput } from '../stores-on-menus/stores-on-menus-create-nested-many-without-menu.input';

@InputType()
export class MenuCreateInput {

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

    @Field(() => StoresOnMenusCreateNestedManyWithoutMenuInput, {nullable:true})
    stores?: StoresOnMenusCreateNestedManyWithoutMenuInput;
}

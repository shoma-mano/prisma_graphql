import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StoresOnMenusCreateNestedManyWithoutStoreInput } from '../stores-on-menus/stores-on-menus-create-nested-many-without-store.input';

@InputType()
export class StoreCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:false})
    longitude!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => StoresOnMenusCreateNestedManyWithoutStoreInput, {nullable:true})
    menus?: StoresOnMenusCreateNestedManyWithoutStoreInput;
}

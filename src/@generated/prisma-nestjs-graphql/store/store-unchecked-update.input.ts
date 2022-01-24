import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StoresOnMenusUncheckedUpdateManyWithoutStoreInput } from '../stores-on-menus/stores-on-menus-unchecked-update-many-without-store.input';

@InputType()
export class StoreUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    latitude?: number;

    @Field(() => Int, {nullable:true})
    longitude?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => StoresOnMenusUncheckedUpdateManyWithoutStoreInput, {nullable:true})
    menus?: StoresOnMenusUncheckedUpdateManyWithoutStoreInput;
}

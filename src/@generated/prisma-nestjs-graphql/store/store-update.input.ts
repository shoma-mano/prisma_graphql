import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StoresOnMenusUpdateManyWithoutStoreInput } from '../stores-on-menus/stores-on-menus-update-many-without-store.input';

@InputType()
export class StoreUpdateInput {

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

    @Field(() => StoresOnMenusUpdateManyWithoutStoreInput, {nullable:true})
    menus?: StoresOnMenusUpdateManyWithoutStoreInput;
}

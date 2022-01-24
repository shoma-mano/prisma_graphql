import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusCreateManyStoreInput {

    @Field(() => Int, {nullable:false})
    menuId!: number;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusStoreIdMenuIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    storeId!: number;

    @Field(() => Int, {nullable:false})
    menuId!: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StoresOnMenusCountAggregate {

    @Field(() => Int, {nullable:false})
    storeId!: number;

    @Field(() => Int, {nullable:false})
    menuId!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

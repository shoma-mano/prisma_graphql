import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StoresOnMenusSumAggregate {

    @Field(() => Int, {nullable:true})
    storeId?: number;

    @Field(() => Int, {nullable:true})
    menuId?: number;
}

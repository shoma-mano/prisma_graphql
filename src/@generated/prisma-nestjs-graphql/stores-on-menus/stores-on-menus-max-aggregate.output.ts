import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StoresOnMenusMaxAggregate {

    @Field(() => Int, {nullable:true})
    storeId?: number;

    @Field(() => Int, {nullable:true})
    menuId?: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;
}

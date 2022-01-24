import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class StoresOnMenusAvgAggregate {

    @Field(() => Float, {nullable:true})
    storeId?: number;

    @Field(() => Float, {nullable:true})
    menuId?: number;
}

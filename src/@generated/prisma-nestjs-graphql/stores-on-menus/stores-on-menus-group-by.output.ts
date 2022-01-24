import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StoresOnMenusCountAggregate } from './stores-on-menus-count-aggregate.output';
import { StoresOnMenusAvgAggregate } from './stores-on-menus-avg-aggregate.output';
import { StoresOnMenusSumAggregate } from './stores-on-menus-sum-aggregate.output';
import { StoresOnMenusMinAggregate } from './stores-on-menus-min-aggregate.output';
import { StoresOnMenusMaxAggregate } from './stores-on-menus-max-aggregate.output';

@ObjectType()
export class StoresOnMenusGroupBy {

    @Field(() => Int, {nullable:false})
    storeId!: number;

    @Field(() => Int, {nullable:false})
    menuId!: number;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => StoresOnMenusCountAggregate, {nullable:true})
    _count?: StoresOnMenusCountAggregate;

    @Field(() => StoresOnMenusAvgAggregate, {nullable:true})
    _avg?: StoresOnMenusAvgAggregate;

    @Field(() => StoresOnMenusSumAggregate, {nullable:true})
    _sum?: StoresOnMenusSumAggregate;

    @Field(() => StoresOnMenusMinAggregate, {nullable:true})
    _min?: StoresOnMenusMinAggregate;

    @Field(() => StoresOnMenusMaxAggregate, {nullable:true})
    _max?: StoresOnMenusMaxAggregate;
}

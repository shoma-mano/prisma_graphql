import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoresOnMenusCountAggregate } from './stores-on-menus-count-aggregate.output';
import { StoresOnMenusAvgAggregate } from './stores-on-menus-avg-aggregate.output';
import { StoresOnMenusSumAggregate } from './stores-on-menus-sum-aggregate.output';
import { StoresOnMenusMinAggregate } from './stores-on-menus-min-aggregate.output';
import { StoresOnMenusMaxAggregate } from './stores-on-menus-max-aggregate.output';

@ObjectType()
export class AggregateStoresOnMenus {

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

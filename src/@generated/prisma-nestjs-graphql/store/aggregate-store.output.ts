import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoreCountAggregate } from './store-count-aggregate.output';
import { StoreAvgAggregate } from './store-avg-aggregate.output';
import { StoreSumAggregate } from './store-sum-aggregate.output';
import { StoreMinAggregate } from './store-min-aggregate.output';
import { StoreMaxAggregate } from './store-max-aggregate.output';

@ObjectType()
export class AggregateStore {

    @Field(() => StoreCountAggregate, {nullable:true})
    _count?: StoreCountAggregate;

    @Field(() => StoreAvgAggregate, {nullable:true})
    _avg?: StoreAvgAggregate;

    @Field(() => StoreSumAggregate, {nullable:true})
    _sum?: StoreSumAggregate;

    @Field(() => StoreMinAggregate, {nullable:true})
    _min?: StoreMinAggregate;

    @Field(() => StoreMaxAggregate, {nullable:true})
    _max?: StoreMaxAggregate;
}

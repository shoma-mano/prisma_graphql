import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StoreCountAggregate } from './store-count-aggregate.output';
import { StoreAvgAggregate } from './store-avg-aggregate.output';
import { StoreSumAggregate } from './store-sum-aggregate.output';
import { StoreMinAggregate } from './store-min-aggregate.output';
import { StoreMaxAggregate } from './store-max-aggregate.output';

@ObjectType()
export class StoreGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:false})
    longitude!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    img?: string;

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

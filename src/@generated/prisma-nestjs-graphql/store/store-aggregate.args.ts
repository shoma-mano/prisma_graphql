import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreWhereInput } from './store-where.input';
import { StoreOrderByWithRelationInput } from './store-order-by-with-relation.input';
import { StoreWhereUniqueInput } from './store-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoreCountAggregateInput } from './store-count-aggregate.input';
import { StoreAvgAggregateInput } from './store-avg-aggregate.input';
import { StoreSumAggregateInput } from './store-sum-aggregate.input';
import { StoreMinAggregateInput } from './store-min-aggregate.input';
import { StoreMaxAggregateInput } from './store-max-aggregate.input';

@ArgsType()
export class StoreAggregateArgs {

    @Field(() => StoreWhereInput, {nullable:true})
    where?: StoreWhereInput;

    @Field(() => [StoreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoreOrderByWithRelationInput>;

    @Field(() => StoreWhereUniqueInput, {nullable:true})
    cursor?: StoreWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StoreCountAggregateInput, {nullable:true})
    _count?: StoreCountAggregateInput;

    @Field(() => StoreAvgAggregateInput, {nullable:true})
    _avg?: StoreAvgAggregateInput;

    @Field(() => StoreSumAggregateInput, {nullable:true})
    _sum?: StoreSumAggregateInput;

    @Field(() => StoreMinAggregateInput, {nullable:true})
    _min?: StoreMinAggregateInput;

    @Field(() => StoreMaxAggregateInput, {nullable:true})
    _max?: StoreMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StoreCountOrderByAggregateInput } from './store-count-order-by-aggregate.input';
import { StoreAvgOrderByAggregateInput } from './store-avg-order-by-aggregate.input';
import { StoreMaxOrderByAggregateInput } from './store-max-order-by-aggregate.input';
import { StoreMinOrderByAggregateInput } from './store-min-order-by-aggregate.input';
import { StoreSumOrderByAggregateInput } from './store-sum-order-by-aggregate.input';

@InputType()
export class StoreOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => StoreCountOrderByAggregateInput, {nullable:true})
    _count?: StoreCountOrderByAggregateInput;

    @Field(() => StoreAvgOrderByAggregateInput, {nullable:true})
    _avg?: StoreAvgOrderByAggregateInput;

    @Field(() => StoreMaxOrderByAggregateInput, {nullable:true})
    _max?: StoreMaxOrderByAggregateInput;

    @Field(() => StoreMinOrderByAggregateInput, {nullable:true})
    _min?: StoreMinOrderByAggregateInput;

    @Field(() => StoreSumOrderByAggregateInput, {nullable:true})
    _sum?: StoreSumOrderByAggregateInput;
}

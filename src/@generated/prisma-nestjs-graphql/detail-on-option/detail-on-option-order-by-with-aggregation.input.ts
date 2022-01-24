import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DetailOnOptionCountOrderByAggregateInput } from './detail-on-option-count-order-by-aggregate.input';
import { DetailOnOptionAvgOrderByAggregateInput } from './detail-on-option-avg-order-by-aggregate.input';
import { DetailOnOptionMaxOrderByAggregateInput } from './detail-on-option-max-order-by-aggregate.input';
import { DetailOnOptionMinOrderByAggregateInput } from './detail-on-option-min-order-by-aggregate.input';
import { DetailOnOptionSumOrderByAggregateInput } from './detail-on-option-sum-order-by-aggregate.input';

@InputType()
export class DetailOnOptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    optionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    detailId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;

    @Field(() => DetailOnOptionCountOrderByAggregateInput, {nullable:true})
    _count?: DetailOnOptionCountOrderByAggregateInput;

    @Field(() => DetailOnOptionAvgOrderByAggregateInput, {nullable:true})
    _avg?: DetailOnOptionAvgOrderByAggregateInput;

    @Field(() => DetailOnOptionMaxOrderByAggregateInput, {nullable:true})
    _max?: DetailOnOptionMaxOrderByAggregateInput;

    @Field(() => DetailOnOptionMinOrderByAggregateInput, {nullable:true})
    _min?: DetailOnOptionMinOrderByAggregateInput;

    @Field(() => DetailOnOptionSumOrderByAggregateInput, {nullable:true})
    _sum?: DetailOnOptionSumOrderByAggregateInput;
}

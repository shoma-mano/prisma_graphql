import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DetailOnOptionsCountOrderByAggregateInput } from './detail-on-options-count-order-by-aggregate.input';
import { DetailOnOptionsAvgOrderByAggregateInput } from './detail-on-options-avg-order-by-aggregate.input';
import { DetailOnOptionsMaxOrderByAggregateInput } from './detail-on-options-max-order-by-aggregate.input';
import { DetailOnOptionsMinOrderByAggregateInput } from './detail-on-options-min-order-by-aggregate.input';
import { DetailOnOptionsSumOrderByAggregateInput } from './detail-on-options-sum-order-by-aggregate.input';

@InputType()
export class DetailOnOptionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    optionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    detailId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;

    @Field(() => DetailOnOptionsCountOrderByAggregateInput, {nullable:true})
    _count?: DetailOnOptionsCountOrderByAggregateInput;

    @Field(() => DetailOnOptionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: DetailOnOptionsAvgOrderByAggregateInput;

    @Field(() => DetailOnOptionsMaxOrderByAggregateInput, {nullable:true})
    _max?: DetailOnOptionsMaxOrderByAggregateInput;

    @Field(() => DetailOnOptionsMinOrderByAggregateInput, {nullable:true})
    _min?: DetailOnOptionsMinOrderByAggregateInput;

    @Field(() => DetailOnOptionsSumOrderByAggregateInput, {nullable:true})
    _sum?: DetailOnOptionsSumOrderByAggregateInput;
}

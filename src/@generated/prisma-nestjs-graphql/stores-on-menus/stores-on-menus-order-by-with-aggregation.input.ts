import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StoresOnMenusCountOrderByAggregateInput } from './stores-on-menus-count-order-by-aggregate.input';
import { StoresOnMenusAvgOrderByAggregateInput } from './stores-on-menus-avg-order-by-aggregate.input';
import { StoresOnMenusMaxOrderByAggregateInput } from './stores-on-menus-max-order-by-aggregate.input';
import { StoresOnMenusMinOrderByAggregateInput } from './stores-on-menus-min-order-by-aggregate.input';
import { StoresOnMenusSumOrderByAggregateInput } from './stores-on-menus-sum-order-by-aggregate.input';

@InputType()
export class StoresOnMenusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    storeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    menuId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => StoresOnMenusCountOrderByAggregateInput, {nullable:true})
    _count?: StoresOnMenusCountOrderByAggregateInput;

    @Field(() => StoresOnMenusAvgOrderByAggregateInput, {nullable:true})
    _avg?: StoresOnMenusAvgOrderByAggregateInput;

    @Field(() => StoresOnMenusMaxOrderByAggregateInput, {nullable:true})
    _max?: StoresOnMenusMaxOrderByAggregateInput;

    @Field(() => StoresOnMenusMinOrderByAggregateInput, {nullable:true})
    _min?: StoresOnMenusMinOrderByAggregateInput;

    @Field(() => StoresOnMenusSumOrderByAggregateInput, {nullable:true})
    _sum?: StoresOnMenusSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MenuCountOrderByAggregateInput } from './menu-count-order-by-aggregate.input';
import { MenuAvgOrderByAggregateInput } from './menu-avg-order-by-aggregate.input';
import { MenuMaxOrderByAggregateInput } from './menu-max-order-by-aggregate.input';
import { MenuMinOrderByAggregateInput } from './menu-min-order-by-aggregate.input';
import { MenuSumOrderByAggregateInput } from './menu-sum-order-by-aggregate.input';

@InputType()
export class MenuOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    detailId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => MenuCountOrderByAggregateInput, {nullable:true})
    _count?: MenuCountOrderByAggregateInput;

    @Field(() => MenuAvgOrderByAggregateInput, {nullable:true})
    _avg?: MenuAvgOrderByAggregateInput;

    @Field(() => MenuMaxOrderByAggregateInput, {nullable:true})
    _max?: MenuMaxOrderByAggregateInput;

    @Field(() => MenuMinOrderByAggregateInput, {nullable:true})
    _min?: MenuMinOrderByAggregateInput;

    @Field(() => MenuSumOrderByAggregateInput, {nullable:true})
    _sum?: MenuSumOrderByAggregateInput;
}

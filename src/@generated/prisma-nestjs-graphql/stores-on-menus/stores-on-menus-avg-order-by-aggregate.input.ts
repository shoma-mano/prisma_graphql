import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StoresOnMenusAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    storeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    menuId?: keyof typeof SortOrder;
}

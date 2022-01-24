import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DetailOnOptionAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    optionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    detailId?: keyof typeof SortOrder;
}

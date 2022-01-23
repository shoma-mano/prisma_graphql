import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DetailOnOptionsOrderByRelationAggregateInput } from '../detail-on-options/detail-on-options-order-by-relation-aggregate.input';

@InputType()
export class OptionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => DetailOnOptionsOrderByRelationAggregateInput, {nullable:true})
    details?: DetailOnOptionsOrderByRelationAggregateInput;
}

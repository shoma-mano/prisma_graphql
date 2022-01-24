import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DetailOnOptionOrderByRelationAggregateInput } from '../detail-on-option/detail-on-option-order-by-relation-aggregate.input';

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

    @Field(() => DetailOnOptionOrderByRelationAggregateInput, {nullable:true})
    details?: DetailOnOptionOrderByRelationAggregateInput;
}

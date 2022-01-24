import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DetailOrderByWithRelationInput } from '../detail/detail-order-by-with-relation.input';
import { StoresOnMenusOrderByRelationAggregateInput } from '../stores-on-menus/stores-on-menus-order-by-relation-aggregate.input';

@InputType()
export class MenuOrderByWithRelationInput {

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

    @Field(() => DetailOrderByWithRelationInput, {nullable:true})
    detail?: DetailOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    detailId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => StoresOnMenusOrderByRelationAggregateInput, {nullable:true})
    stores?: StoresOnMenusOrderByRelationAggregateInput;
}

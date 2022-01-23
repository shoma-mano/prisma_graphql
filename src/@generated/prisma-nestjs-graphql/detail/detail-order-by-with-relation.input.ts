import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MenuOrderByWithRelationInput } from '../menu/menu-order-by-with-relation.input';
import { DetailOnOptionsOrderByRelationAggregateInput } from '../detail-on-options/detail-on-options-order-by-relation-aggregate.input';

@InputType()
export class DetailOrderByWithRelationInput {

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
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sentence?: keyof typeof SortOrder;

    @Field(() => MenuOrderByWithRelationInput, {nullable:true})
    menu?: MenuOrderByWithRelationInput;

    @Field(() => DetailOnOptionsOrderByRelationAggregateInput, {nullable:true})
    options?: DetailOnOptionsOrderByRelationAggregateInput;
}

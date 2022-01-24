import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionOrderByWithRelationInput } from '../option/option-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { DetailOrderByWithRelationInput } from '../detail/detail-order-by-with-relation.input';

@InputType()
export class DetailOnOptionOrderByWithRelationInput {

    @Field(() => OptionOrderByWithRelationInput, {nullable:true})
    option?: OptionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    optionId?: keyof typeof SortOrder;

    @Field(() => DetailOrderByWithRelationInput, {nullable:true})
    detail?: DetailOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    detailId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class StoresOnMenusScalarWhereWithAggregatesInput {

    @Field(() => [StoresOnMenusScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StoresOnMenusScalarWhereWithAggregatesInput>;

    @Field(() => [StoresOnMenusScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StoresOnMenusScalarWhereWithAggregatesInput>;

    @Field(() => [StoresOnMenusScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StoresOnMenusScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    storeId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    menuId?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;
}

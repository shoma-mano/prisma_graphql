import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class MenuScalarWhereWithAggregatesInput {

    @Field(() => [MenuScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MenuScalarWhereWithAggregatesInput>;

    @Field(() => [MenuScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MenuScalarWhereWithAggregatesInput>;

    @Field(() => [MenuScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MenuScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    img?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    detailId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: StringWithAggregatesFilter;
}

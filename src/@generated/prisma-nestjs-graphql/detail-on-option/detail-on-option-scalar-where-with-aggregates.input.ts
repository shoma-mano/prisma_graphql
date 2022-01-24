import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DetailOnOptionScalarWhereWithAggregatesInput {

    @Field(() => [DetailOnOptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DetailOnOptionScalarWhereWithAggregatesInput>;

    @Field(() => [DetailOnOptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DetailOnOptionScalarWhereWithAggregatesInput>;

    @Field(() => [DetailOnOptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DetailOnOptionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    optionId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    detailId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    assignedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assignedBy?: StringWithAggregatesFilter;
}

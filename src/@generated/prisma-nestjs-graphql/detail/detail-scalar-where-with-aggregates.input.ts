import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DetailScalarWhereWithAggregatesInput {

    @Field(() => [DetailScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DetailScalarWhereWithAggregatesInput>;

    @Field(() => [DetailScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DetailScalarWhereWithAggregatesInput>;

    @Field(() => [DetailScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DetailScalarWhereWithAggregatesInput>;

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

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sentence?: StringWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DetailOnOptionListRelationFilter } from '../detail-on-option/detail-on-option-list-relation-filter.input';

@InputType()
export class OptionWhereInput {

    @Field(() => [OptionWhereInput], {nullable:true})
    AND?: Array<OptionWhereInput>;

    @Field(() => [OptionWhereInput], {nullable:true})
    OR?: Array<OptionWhereInput>;

    @Field(() => [OptionWhereInput], {nullable:true})
    NOT?: Array<OptionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DetailOnOptionListRelationFilter, {nullable:true})
    details?: DetailOnOptionListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionRelationFilter } from '../option/option-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DetailRelationFilter } from '../detail/detail-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DetailOnOptionsWhereInput {

    @Field(() => [DetailOnOptionsWhereInput], {nullable:true})
    AND?: Array<DetailOnOptionsWhereInput>;

    @Field(() => [DetailOnOptionsWhereInput], {nullable:true})
    OR?: Array<DetailOnOptionsWhereInput>;

    @Field(() => [DetailOnOptionsWhereInput], {nullable:true})
    NOT?: Array<DetailOnOptionsWhereInput>;

    @Field(() => OptionRelationFilter, {nullable:true})
    option?: OptionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    optionId?: IntFilter;

    @Field(() => DetailRelationFilter, {nullable:true})
    detail?: DetailRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    detailId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DetailOnOptionScalarWhereInput {

    @Field(() => [DetailOnOptionScalarWhereInput], {nullable:true})
    AND?: Array<DetailOnOptionScalarWhereInput>;

    @Field(() => [DetailOnOptionScalarWhereInput], {nullable:true})
    OR?: Array<DetailOnOptionScalarWhereInput>;

    @Field(() => [DetailOnOptionScalarWhereInput], {nullable:true})
    NOT?: Array<DetailOnOptionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    optionId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    detailId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}

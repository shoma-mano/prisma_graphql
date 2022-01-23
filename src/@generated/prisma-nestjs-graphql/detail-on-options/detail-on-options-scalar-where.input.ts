import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DetailOnOptionsScalarWhereInput {

    @Field(() => [DetailOnOptionsScalarWhereInput], {nullable:true})
    AND?: Array<DetailOnOptionsScalarWhereInput>;

    @Field(() => [DetailOnOptionsScalarWhereInput], {nullable:true})
    OR?: Array<DetailOnOptionsScalarWhereInput>;

    @Field(() => [DetailOnOptionsScalarWhereInput], {nullable:true})
    NOT?: Array<DetailOnOptionsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    optionId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    detailId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}

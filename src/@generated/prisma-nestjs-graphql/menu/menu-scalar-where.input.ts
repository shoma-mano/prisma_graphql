import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class MenuScalarWhereInput {

    @Field(() => [MenuScalarWhereInput], {nullable:true})
    AND?: Array<MenuScalarWhereInput>;

    @Field(() => [MenuScalarWhereInput], {nullable:true})
    OR?: Array<MenuScalarWhereInput>;

    @Field(() => [MenuScalarWhereInput], {nullable:true})
    NOT?: Array<MenuScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    img?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    detailId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;
}

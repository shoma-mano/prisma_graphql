import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DetailRelationFilter } from '../detail/detail-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StoresOnMenusListRelationFilter } from '../stores-on-menus/stores-on-menus-list-relation-filter.input';

@InputType()
export class MenuWhereInput {

    @Field(() => [MenuWhereInput], {nullable:true})
    AND?: Array<MenuWhereInput>;

    @Field(() => [MenuWhereInput], {nullable:true})
    OR?: Array<MenuWhereInput>;

    @Field(() => [MenuWhereInput], {nullable:true})
    NOT?: Array<MenuWhereInput>;

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

    @Field(() => DetailRelationFilter, {nullable:true})
    detail?: DetailRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    detailId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => StoresOnMenusListRelationFilter, {nullable:true})
    stores?: StoresOnMenusListRelationFilter;
}

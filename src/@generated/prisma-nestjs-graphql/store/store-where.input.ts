import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StoresOnMenusListRelationFilter } from '../stores-on-menus/stores-on-menus-list-relation-filter.input';

@InputType()
export class StoreWhereInput {

    @Field(() => [StoreWhereInput], {nullable:true})
    AND?: Array<StoreWhereInput>;

    @Field(() => [StoreWhereInput], {nullable:true})
    OR?: Array<StoreWhereInput>;

    @Field(() => [StoreWhereInput], {nullable:true})
    NOT?: Array<StoreWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    latitude?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    longitude?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    img?: StringNullableFilter;

    @Field(() => StoresOnMenusListRelationFilter, {nullable:true})
    menus?: StoresOnMenusListRelationFilter;
}

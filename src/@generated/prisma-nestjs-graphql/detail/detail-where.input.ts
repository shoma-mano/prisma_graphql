import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MenuRelationFilter } from '../menu/menu-relation-filter.input';
import { DetailOnOptionListRelationFilter } from '../detail-on-option/detail-on-option-list-relation-filter.input';

@InputType()
export class DetailWhereInput {

    @Field(() => [DetailWhereInput], {nullable:true})
    AND?: Array<DetailWhereInput>;

    @Field(() => [DetailWhereInput], {nullable:true})
    OR?: Array<DetailWhereInput>;

    @Field(() => [DetailWhereInput], {nullable:true})
    NOT?: Array<DetailWhereInput>;

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

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    sentence?: StringFilter;

    @Field(() => MenuRelationFilter, {nullable:true})
    menu?: MenuRelationFilter;

    @Field(() => DetailOnOptionListRelationFilter, {nullable:true})
    options?: DetailOnOptionListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreRelationFilter } from '../store/store-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { MenuRelationFilter } from '../menu/menu-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class StoresOnMenusWhereInput {

    @Field(() => [StoresOnMenusWhereInput], {nullable:true})
    AND?: Array<StoresOnMenusWhereInput>;

    @Field(() => [StoresOnMenusWhereInput], {nullable:true})
    OR?: Array<StoresOnMenusWhereInput>;

    @Field(() => [StoresOnMenusWhereInput], {nullable:true})
    NOT?: Array<StoresOnMenusWhereInput>;

    @Field(() => StoreRelationFilter, {nullable:true})
    store?: StoreRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    storeId?: IntFilter;

    @Field(() => MenuRelationFilter, {nullable:true})
    menu?: MenuRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    menuId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;
}

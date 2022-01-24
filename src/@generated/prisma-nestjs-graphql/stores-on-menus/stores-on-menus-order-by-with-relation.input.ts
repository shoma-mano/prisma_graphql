import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreOrderByWithRelationInput } from '../store/store-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { MenuOrderByWithRelationInput } from '../menu/menu-order-by-with-relation.input';

@InputType()
export class StoresOnMenusOrderByWithRelationInput {

    @Field(() => StoreOrderByWithRelationInput, {nullable:true})
    store?: StoreOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    storeId?: keyof typeof SortOrder;

    @Field(() => MenuOrderByWithRelationInput, {nullable:true})
    menu?: MenuOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    menuId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;
}

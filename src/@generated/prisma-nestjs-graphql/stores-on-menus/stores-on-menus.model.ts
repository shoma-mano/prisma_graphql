import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Store } from '../store/store.model';
import { Int } from '@nestjs/graphql';
import { Menu } from '../menu/menu.model';

@ObjectType()
export class StoresOnMenus {

    @Field(() => Store, {nullable:false})
    store?: Store;

    @Field(() => Int, {nullable:false})
    storeId!: number;

    @Field(() => Menu, {nullable:false})
    menu?: Menu;

    @Field(() => Int, {nullable:false})
    menuId!: number;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;
}

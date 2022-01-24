import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreCreateNestedOneWithoutMenusInput } from '../store/store-create-nested-one-without-menus.input';
import { MenuCreateNestedOneWithoutStoresInput } from '../menu/menu-create-nested-one-without-stores.input';

@InputType()
export class StoresOnMenusCreateInput {

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => StoreCreateNestedOneWithoutMenusInput, {nullable:false})
    store!: StoreCreateNestedOneWithoutMenusInput;

    @Field(() => MenuCreateNestedOneWithoutStoresInput, {nullable:false})
    menu!: MenuCreateNestedOneWithoutStoresInput;
}

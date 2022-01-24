import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateNestedOneWithoutStoresInput } from '../menu/menu-create-nested-one-without-stores.input';

@InputType()
export class StoresOnMenusCreateWithoutStoreInput {

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => MenuCreateNestedOneWithoutStoresInput, {nullable:false})
    menu!: MenuCreateNestedOneWithoutStoresInput;
}

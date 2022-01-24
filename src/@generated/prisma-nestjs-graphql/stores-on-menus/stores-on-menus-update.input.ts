import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreUpdateOneRequiredWithoutMenusInput } from '../store/store-update-one-required-without-menus.input';
import { MenuUpdateOneRequiredWithoutStoresInput } from '../menu/menu-update-one-required-without-stores.input';

@InputType()
export class StoresOnMenusUpdateInput {

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => StoreUpdateOneRequiredWithoutMenusInput, {nullable:true})
    store?: StoreUpdateOneRequiredWithoutMenusInput;

    @Field(() => MenuUpdateOneRequiredWithoutStoresInput, {nullable:true})
    menu?: MenuUpdateOneRequiredWithoutStoresInput;
}

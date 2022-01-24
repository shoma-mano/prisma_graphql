import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuUpdateOneRequiredWithoutStoresInput } from '../menu/menu-update-one-required-without-stores.input';

@InputType()
export class StoresOnMenusUpdateWithoutStoreInput {

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => MenuUpdateOneRequiredWithoutStoresInput, {nullable:true})
    menu?: MenuUpdateOneRequiredWithoutStoresInput;
}

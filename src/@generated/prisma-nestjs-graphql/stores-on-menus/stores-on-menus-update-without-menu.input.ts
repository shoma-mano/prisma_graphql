import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreUpdateOneRequiredWithoutMenusInput } from '../store/store-update-one-required-without-menus.input';

@InputType()
export class StoresOnMenusUpdateWithoutMenuInput {

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => StoreUpdateOneRequiredWithoutMenusInput, {nullable:true})
    store?: StoreUpdateOneRequiredWithoutMenusInput;
}

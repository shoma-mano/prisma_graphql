import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreCreateNestedOneWithoutMenusInput } from '../store/store-create-nested-one-without-menus.input';

@InputType()
export class StoresOnMenusCreateWithoutMenuInput {

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => StoreCreateNestedOneWithoutMenusInput, {nullable:false})
    store!: StoreCreateNestedOneWithoutMenusInput;
}

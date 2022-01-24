import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreUpdateWithoutMenusInput } from './store-update-without-menus.input';
import { StoreCreateWithoutMenusInput } from './store-create-without-menus.input';

@InputType()
export class StoreUpsertWithoutMenusInput {

    @Field(() => StoreUpdateWithoutMenusInput, {nullable:false})
    update!: StoreUpdateWithoutMenusInput;

    @Field(() => StoreCreateWithoutMenusInput, {nullable:false})
    create!: StoreCreateWithoutMenusInput;
}

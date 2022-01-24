import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreWhereUniqueInput } from './store-where-unique.input';
import { StoreUpdateWithoutMenusInput } from './store-update-without-menus.input';
import { StoreCreateWithoutMenusInput } from './store-create-without-menus.input';

@InputType()
export class StoreUpsertWithWhereUniqueWithoutMenusInput {

    @Field(() => StoreWhereUniqueInput, {nullable:false})
    where!: StoreWhereUniqueInput;

    @Field(() => StoreUpdateWithoutMenusInput, {nullable:false})
    update!: StoreUpdateWithoutMenusInput;

    @Field(() => StoreCreateWithoutMenusInput, {nullable:false})
    create!: StoreCreateWithoutMenusInput;
}

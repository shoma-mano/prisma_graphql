import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuUpdateWithoutStoresInput } from './menu-update-without-stores.input';
import { MenuCreateWithoutStoresInput } from './menu-create-without-stores.input';

@InputType()
export class MenuUpsertWithWhereUniqueWithoutStoresInput {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    where!: MenuWhereUniqueInput;

    @Field(() => MenuUpdateWithoutStoresInput, {nullable:false})
    update!: MenuUpdateWithoutStoresInput;

    @Field(() => MenuCreateWithoutStoresInput, {nullable:false})
    create!: MenuCreateWithoutStoresInput;
}

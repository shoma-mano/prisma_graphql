import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutStoresInput } from './menu-create-without-stores.input';
import { MenuCreateOrConnectWithoutStoresInput } from './menu-create-or-connect-without-stores.input';
import { MenuUpsertWithoutStoresInput } from './menu-upsert-without-stores.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuUpdateWithoutStoresInput } from './menu-update-without-stores.input';

@InputType()
export class MenuUpdateOneRequiredWithoutStoresInput {

    @Field(() => MenuCreateWithoutStoresInput, {nullable:true})
    create?: MenuCreateWithoutStoresInput;

    @Field(() => MenuCreateOrConnectWithoutStoresInput, {nullable:true})
    connectOrCreate?: MenuCreateOrConnectWithoutStoresInput;

    @Field(() => MenuUpsertWithoutStoresInput, {nullable:true})
    upsert?: MenuUpsertWithoutStoresInput;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    connect?: MenuWhereUniqueInput;

    @Field(() => MenuUpdateWithoutStoresInput, {nullable:true})
    update?: MenuUpdateWithoutStoresInput;
}

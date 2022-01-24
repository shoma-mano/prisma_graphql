import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutStoresInput } from './menu-create-without-stores.input';
import { MenuCreateOrConnectWithoutStoresInput } from './menu-create-or-connect-without-stores.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@InputType()
export class MenuCreateNestedOneWithoutStoresInput {

    @Field(() => MenuCreateWithoutStoresInput, {nullable:true})
    create?: MenuCreateWithoutStoresInput;

    @Field(() => MenuCreateOrConnectWithoutStoresInput, {nullable:true})
    connectOrCreate?: MenuCreateOrConnectWithoutStoresInput;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    connect?: MenuWhereUniqueInput;
}

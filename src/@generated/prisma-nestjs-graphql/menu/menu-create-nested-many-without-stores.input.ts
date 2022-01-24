import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutStoresInput } from './menu-create-without-stores.input';
import { MenuCreateOrConnectWithoutStoresInput } from './menu-create-or-connect-without-stores.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@InputType()
export class MenuCreateNestedManyWithoutStoresInput {

    @Field(() => [MenuCreateWithoutStoresInput], {nullable:true})
    create?: Array<MenuCreateWithoutStoresInput>;

    @Field(() => [MenuCreateOrConnectWithoutStoresInput], {nullable:true})
    connectOrCreate?: Array<MenuCreateOrConnectWithoutStoresInput>;

    @Field(() => [MenuWhereUniqueInput], {nullable:true})
    connect?: Array<MenuWhereUniqueInput>;
}

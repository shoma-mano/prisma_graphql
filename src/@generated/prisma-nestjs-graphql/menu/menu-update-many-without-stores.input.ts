import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutStoresInput } from './menu-create-without-stores.input';
import { MenuCreateOrConnectWithoutStoresInput } from './menu-create-or-connect-without-stores.input';
import { MenuUpsertWithWhereUniqueWithoutStoresInput } from './menu-upsert-with-where-unique-without-stores.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuUpdateWithWhereUniqueWithoutStoresInput } from './menu-update-with-where-unique-without-stores.input';
import { MenuUpdateManyWithWhereWithoutStoresInput } from './menu-update-many-with-where-without-stores.input';
import { MenuScalarWhereInput } from './menu-scalar-where.input';

@InputType()
export class MenuUpdateManyWithoutStoresInput {

    @Field(() => [MenuCreateWithoutStoresInput], {nullable:true})
    create?: Array<MenuCreateWithoutStoresInput>;

    @Field(() => [MenuCreateOrConnectWithoutStoresInput], {nullable:true})
    connectOrCreate?: Array<MenuCreateOrConnectWithoutStoresInput>;

    @Field(() => [MenuUpsertWithWhereUniqueWithoutStoresInput], {nullable:true})
    upsert?: Array<MenuUpsertWithWhereUniqueWithoutStoresInput>;

    @Field(() => [MenuWhereUniqueInput], {nullable:true})
    set?: Array<MenuWhereUniqueInput>;

    @Field(() => [MenuWhereUniqueInput], {nullable:true})
    disconnect?: Array<MenuWhereUniqueInput>;

    @Field(() => [MenuWhereUniqueInput], {nullable:true})
    delete?: Array<MenuWhereUniqueInput>;

    @Field(() => [MenuWhereUniqueInput], {nullable:true})
    connect?: Array<MenuWhereUniqueInput>;

    @Field(() => [MenuUpdateWithWhereUniqueWithoutStoresInput], {nullable:true})
    update?: Array<MenuUpdateWithWhereUniqueWithoutStoresInput>;

    @Field(() => [MenuUpdateManyWithWhereWithoutStoresInput], {nullable:true})
    updateMany?: Array<MenuUpdateManyWithWhereWithoutStoresInput>;

    @Field(() => [MenuScalarWhereInput], {nullable:true})
    deleteMany?: Array<MenuScalarWhereInput>;
}

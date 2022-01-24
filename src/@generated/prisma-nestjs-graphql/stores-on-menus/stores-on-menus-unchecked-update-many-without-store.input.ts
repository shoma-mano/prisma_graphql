import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusCreateWithoutStoreInput } from './stores-on-menus-create-without-store.input';
import { StoresOnMenusCreateOrConnectWithoutStoreInput } from './stores-on-menus-create-or-connect-without-store.input';
import { StoresOnMenusUpsertWithWhereUniqueWithoutStoreInput } from './stores-on-menus-upsert-with-where-unique-without-store.input';
import { StoresOnMenusCreateManyStoreInputEnvelope } from './stores-on-menus-create-many-store-input-envelope.input';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { StoresOnMenusUpdateWithWhereUniqueWithoutStoreInput } from './stores-on-menus-update-with-where-unique-without-store.input';
import { StoresOnMenusUpdateManyWithWhereWithoutStoreInput } from './stores-on-menus-update-many-with-where-without-store.input';
import { StoresOnMenusScalarWhereInput } from './stores-on-menus-scalar-where.input';

@InputType()
export class StoresOnMenusUncheckedUpdateManyWithoutStoreInput {

    @Field(() => [StoresOnMenusCreateWithoutStoreInput], {nullable:true})
    create?: Array<StoresOnMenusCreateWithoutStoreInput>;

    @Field(() => [StoresOnMenusCreateOrConnectWithoutStoreInput], {nullable:true})
    connectOrCreate?: Array<StoresOnMenusCreateOrConnectWithoutStoreInput>;

    @Field(() => [StoresOnMenusUpsertWithWhereUniqueWithoutStoreInput], {nullable:true})
    upsert?: Array<StoresOnMenusUpsertWithWhereUniqueWithoutStoreInput>;

    @Field(() => StoresOnMenusCreateManyStoreInputEnvelope, {nullable:true})
    createMany?: StoresOnMenusCreateManyStoreInputEnvelope;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    set?: Array<StoresOnMenusWhereUniqueInput>;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    disconnect?: Array<StoresOnMenusWhereUniqueInput>;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    delete?: Array<StoresOnMenusWhereUniqueInput>;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    connect?: Array<StoresOnMenusWhereUniqueInput>;

    @Field(() => [StoresOnMenusUpdateWithWhereUniqueWithoutStoreInput], {nullable:true})
    update?: Array<StoresOnMenusUpdateWithWhereUniqueWithoutStoreInput>;

    @Field(() => [StoresOnMenusUpdateManyWithWhereWithoutStoreInput], {nullable:true})
    updateMany?: Array<StoresOnMenusUpdateManyWithWhereWithoutStoreInput>;

    @Field(() => [StoresOnMenusScalarWhereInput], {nullable:true})
    deleteMany?: Array<StoresOnMenusScalarWhereInput>;
}

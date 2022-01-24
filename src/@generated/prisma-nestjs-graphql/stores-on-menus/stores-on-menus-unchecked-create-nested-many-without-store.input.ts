import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusCreateWithoutStoreInput } from './stores-on-menus-create-without-store.input';
import { StoresOnMenusCreateOrConnectWithoutStoreInput } from './stores-on-menus-create-or-connect-without-store.input';
import { StoresOnMenusCreateManyStoreInputEnvelope } from './stores-on-menus-create-many-store-input-envelope.input';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';

@InputType()
export class StoresOnMenusUncheckedCreateNestedManyWithoutStoreInput {

    @Field(() => [StoresOnMenusCreateWithoutStoreInput], {nullable:true})
    create?: Array<StoresOnMenusCreateWithoutStoreInput>;

    @Field(() => [StoresOnMenusCreateOrConnectWithoutStoreInput], {nullable:true})
    connectOrCreate?: Array<StoresOnMenusCreateOrConnectWithoutStoreInput>;

    @Field(() => StoresOnMenusCreateManyStoreInputEnvelope, {nullable:true})
    createMany?: StoresOnMenusCreateManyStoreInputEnvelope;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    connect?: Array<StoresOnMenusWhereUniqueInput>;
}

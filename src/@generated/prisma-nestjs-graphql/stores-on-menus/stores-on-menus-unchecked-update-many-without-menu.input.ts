import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusCreateWithoutMenuInput } from './stores-on-menus-create-without-menu.input';
import { StoresOnMenusCreateOrConnectWithoutMenuInput } from './stores-on-menus-create-or-connect-without-menu.input';
import { StoresOnMenusUpsertWithWhereUniqueWithoutMenuInput } from './stores-on-menus-upsert-with-where-unique-without-menu.input';
import { StoresOnMenusCreateManyMenuInputEnvelope } from './stores-on-menus-create-many-menu-input-envelope.input';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { StoresOnMenusUpdateWithWhereUniqueWithoutMenuInput } from './stores-on-menus-update-with-where-unique-without-menu.input';
import { StoresOnMenusUpdateManyWithWhereWithoutMenuInput } from './stores-on-menus-update-many-with-where-without-menu.input';
import { StoresOnMenusScalarWhereInput } from './stores-on-menus-scalar-where.input';

@InputType()
export class StoresOnMenusUncheckedUpdateManyWithoutMenuInput {

    @Field(() => [StoresOnMenusCreateWithoutMenuInput], {nullable:true})
    create?: Array<StoresOnMenusCreateWithoutMenuInput>;

    @Field(() => [StoresOnMenusCreateOrConnectWithoutMenuInput], {nullable:true})
    connectOrCreate?: Array<StoresOnMenusCreateOrConnectWithoutMenuInput>;

    @Field(() => [StoresOnMenusUpsertWithWhereUniqueWithoutMenuInput], {nullable:true})
    upsert?: Array<StoresOnMenusUpsertWithWhereUniqueWithoutMenuInput>;

    @Field(() => StoresOnMenusCreateManyMenuInputEnvelope, {nullable:true})
    createMany?: StoresOnMenusCreateManyMenuInputEnvelope;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    set?: Array<StoresOnMenusWhereUniqueInput>;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    disconnect?: Array<StoresOnMenusWhereUniqueInput>;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    delete?: Array<StoresOnMenusWhereUniqueInput>;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    connect?: Array<StoresOnMenusWhereUniqueInput>;

    @Field(() => [StoresOnMenusUpdateWithWhereUniqueWithoutMenuInput], {nullable:true})
    update?: Array<StoresOnMenusUpdateWithWhereUniqueWithoutMenuInput>;

    @Field(() => [StoresOnMenusUpdateManyWithWhereWithoutMenuInput], {nullable:true})
    updateMany?: Array<StoresOnMenusUpdateManyWithWhereWithoutMenuInput>;

    @Field(() => [StoresOnMenusScalarWhereInput], {nullable:true})
    deleteMany?: Array<StoresOnMenusScalarWhereInput>;
}

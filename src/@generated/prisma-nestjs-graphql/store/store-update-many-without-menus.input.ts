import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreCreateWithoutMenusInput } from './store-create-without-menus.input';
import { StoreCreateOrConnectWithoutMenusInput } from './store-create-or-connect-without-menus.input';
import { StoreUpsertWithWhereUniqueWithoutMenusInput } from './store-upsert-with-where-unique-without-menus.input';
import { StoreWhereUniqueInput } from './store-where-unique.input';
import { StoreUpdateWithWhereUniqueWithoutMenusInput } from './store-update-with-where-unique-without-menus.input';
import { StoreUpdateManyWithWhereWithoutMenusInput } from './store-update-many-with-where-without-menus.input';
import { StoreScalarWhereInput } from './store-scalar-where.input';

@InputType()
export class StoreUpdateManyWithoutMenusInput {

    @Field(() => [StoreCreateWithoutMenusInput], {nullable:true})
    create?: Array<StoreCreateWithoutMenusInput>;

    @Field(() => [StoreCreateOrConnectWithoutMenusInput], {nullable:true})
    connectOrCreate?: Array<StoreCreateOrConnectWithoutMenusInput>;

    @Field(() => [StoreUpsertWithWhereUniqueWithoutMenusInput], {nullable:true})
    upsert?: Array<StoreUpsertWithWhereUniqueWithoutMenusInput>;

    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    set?: Array<StoreWhereUniqueInput>;

    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    disconnect?: Array<StoreWhereUniqueInput>;

    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    delete?: Array<StoreWhereUniqueInput>;

    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    connect?: Array<StoreWhereUniqueInput>;

    @Field(() => [StoreUpdateWithWhereUniqueWithoutMenusInput], {nullable:true})
    update?: Array<StoreUpdateWithWhereUniqueWithoutMenusInput>;

    @Field(() => [StoreUpdateManyWithWhereWithoutMenusInput], {nullable:true})
    updateMany?: Array<StoreUpdateManyWithWhereWithoutMenusInput>;

    @Field(() => [StoreScalarWhereInput], {nullable:true})
    deleteMany?: Array<StoreScalarWhereInput>;
}

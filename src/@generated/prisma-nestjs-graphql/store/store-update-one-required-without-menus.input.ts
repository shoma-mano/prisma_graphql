import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreCreateWithoutMenusInput } from './store-create-without-menus.input';
import { StoreCreateOrConnectWithoutMenusInput } from './store-create-or-connect-without-menus.input';
import { StoreUpsertWithoutMenusInput } from './store-upsert-without-menus.input';
import { StoreWhereUniqueInput } from './store-where-unique.input';
import { StoreUpdateWithoutMenusInput } from './store-update-without-menus.input';

@InputType()
export class StoreUpdateOneRequiredWithoutMenusInput {

    @Field(() => StoreCreateWithoutMenusInput, {nullable:true})
    create?: StoreCreateWithoutMenusInput;

    @Field(() => StoreCreateOrConnectWithoutMenusInput, {nullable:true})
    connectOrCreate?: StoreCreateOrConnectWithoutMenusInput;

    @Field(() => StoreUpsertWithoutMenusInput, {nullable:true})
    upsert?: StoreUpsertWithoutMenusInput;

    @Field(() => StoreWhereUniqueInput, {nullable:true})
    connect?: StoreWhereUniqueInput;

    @Field(() => StoreUpdateWithoutMenusInput, {nullable:true})
    update?: StoreUpdateWithoutMenusInput;
}

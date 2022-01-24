import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreCreateWithoutMenusInput } from './store-create-without-menus.input';
import { StoreCreateOrConnectWithoutMenusInput } from './store-create-or-connect-without-menus.input';
import { StoreWhereUniqueInput } from './store-where-unique.input';

@InputType()
export class StoreCreateNestedOneWithoutMenusInput {

    @Field(() => StoreCreateWithoutMenusInput, {nullable:true})
    create?: StoreCreateWithoutMenusInput;

    @Field(() => StoreCreateOrConnectWithoutMenusInput, {nullable:true})
    connectOrCreate?: StoreCreateOrConnectWithoutMenusInput;

    @Field(() => StoreWhereUniqueInput, {nullable:true})
    connect?: StoreWhereUniqueInput;
}

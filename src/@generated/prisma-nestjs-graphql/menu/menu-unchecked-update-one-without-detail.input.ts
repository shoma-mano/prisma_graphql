import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutDetailInput } from './menu-create-without-detail.input';
import { MenuCreateOrConnectWithoutDetailInput } from './menu-create-or-connect-without-detail.input';
import { MenuUpsertWithoutDetailInput } from './menu-upsert-without-detail.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuUpdateWithoutDetailInput } from './menu-update-without-detail.input';

@InputType()
export class MenuUncheckedUpdateOneWithoutDetailInput {

    @Field(() => MenuCreateWithoutDetailInput, {nullable:true})
    create?: MenuCreateWithoutDetailInput;

    @Field(() => MenuCreateOrConnectWithoutDetailInput, {nullable:true})
    connectOrCreate?: MenuCreateOrConnectWithoutDetailInput;

    @Field(() => MenuUpsertWithoutDetailInput, {nullable:true})
    upsert?: MenuUpsertWithoutDetailInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    connect?: MenuWhereUniqueInput;

    @Field(() => MenuUpdateWithoutDetailInput, {nullable:true})
    update?: MenuUpdateWithoutDetailInput;
}

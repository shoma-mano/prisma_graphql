import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutDetailInput } from './menu-create-without-detail.input';
import { MenuCreateOrConnectWithoutDetailInput } from './menu-create-or-connect-without-detail.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@InputType()
export class MenuCreateNestedOneWithoutDetailInput {

    @Field(() => MenuCreateWithoutDetailInput, {nullable:true})
    create?: MenuCreateWithoutDetailInput;

    @Field(() => MenuCreateOrConnectWithoutDetailInput, {nullable:true})
    connectOrCreate?: MenuCreateOrConnectWithoutDetailInput;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    connect?: MenuWhereUniqueInput;
}

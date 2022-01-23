import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuCreateWithoutDetailInput } from './menu-create-without-detail.input';

@InputType()
export class MenuCreateOrConnectWithoutDetailInput {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    where!: MenuWhereUniqueInput;

    @Field(() => MenuCreateWithoutDetailInput, {nullable:false})
    create!: MenuCreateWithoutDetailInput;
}

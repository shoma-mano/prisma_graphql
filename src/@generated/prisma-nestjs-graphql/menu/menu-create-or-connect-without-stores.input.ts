import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuCreateWithoutStoresInput } from './menu-create-without-stores.input';

@InputType()
export class MenuCreateOrConnectWithoutStoresInput {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    where!: MenuWhereUniqueInput;

    @Field(() => MenuCreateWithoutStoresInput, {nullable:false})
    create!: MenuCreateWithoutStoresInput;
}

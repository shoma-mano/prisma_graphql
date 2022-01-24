import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuUpdateWithoutStoresInput } from './menu-update-without-stores.input';

@InputType()
export class MenuUpdateWithWhereUniqueWithoutStoresInput {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    where!: MenuWhereUniqueInput;

    @Field(() => MenuUpdateWithoutStoresInput, {nullable:false})
    data!: MenuUpdateWithoutStoresInput;
}

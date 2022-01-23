import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuCreateInput } from './menu-create.input';
import { MenuUpdateInput } from './menu-update.input';

@ArgsType()
export class UpsertOneMenuArgs {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    where!: MenuWhereUniqueInput;

    @Field(() => MenuCreateInput, {nullable:false})
    create!: MenuCreateInput;

    @Field(() => MenuUpdateInput, {nullable:false})
    update!: MenuUpdateInput;
}

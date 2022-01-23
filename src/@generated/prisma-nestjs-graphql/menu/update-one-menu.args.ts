import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuUpdateInput } from './menu-update.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@ArgsType()
export class UpdateOneMenuArgs {

    @Field(() => MenuUpdateInput, {nullable:false})
    data!: MenuUpdateInput;

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    where!: MenuWhereUniqueInput;
}

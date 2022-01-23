import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@ArgsType()
export class DeleteOneMenuArgs {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    where!: MenuWhereUniqueInput;
}

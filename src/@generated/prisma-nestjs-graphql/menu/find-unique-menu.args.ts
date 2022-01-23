import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@ArgsType()
export class FindUniqueMenuArgs {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    where!: MenuWhereUniqueInput;
}

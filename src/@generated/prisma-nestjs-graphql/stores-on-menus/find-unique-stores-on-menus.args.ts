import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';

@ArgsType()
export class FindUniqueStoresOnMenusArgs {

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:false})
    where!: StoresOnMenusWhereUniqueInput;
}

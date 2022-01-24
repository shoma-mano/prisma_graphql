import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusUpdateInput } from './stores-on-menus-update.input';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';

@ArgsType()
export class UpdateOneStoresOnMenusArgs {

    @Field(() => StoresOnMenusUpdateInput, {nullable:false})
    data!: StoresOnMenusUpdateInput;

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:false})
    where!: StoresOnMenusWhereUniqueInput;
}

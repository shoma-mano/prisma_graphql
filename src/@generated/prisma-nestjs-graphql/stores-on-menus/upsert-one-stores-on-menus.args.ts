import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { StoresOnMenusCreateInput } from './stores-on-menus-create.input';
import { StoresOnMenusUpdateInput } from './stores-on-menus-update.input';

@ArgsType()
export class UpsertOneStoresOnMenusArgs {

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:false})
    where!: StoresOnMenusWhereUniqueInput;

    @Field(() => StoresOnMenusCreateInput, {nullable:false})
    create!: StoresOnMenusCreateInput;

    @Field(() => StoresOnMenusUpdateInput, {nullable:false})
    update!: StoresOnMenusUpdateInput;
}

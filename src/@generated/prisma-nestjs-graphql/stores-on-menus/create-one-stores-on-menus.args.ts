import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusCreateInput } from './stores-on-menus-create.input';

@ArgsType()
export class CreateOneStoresOnMenusArgs {

    @Field(() => StoresOnMenusCreateInput, {nullable:false})
    data!: StoresOnMenusCreateInput;
}

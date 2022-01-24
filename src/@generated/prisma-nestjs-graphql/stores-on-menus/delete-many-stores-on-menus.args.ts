import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusWhereInput } from './stores-on-menus-where.input';

@ArgsType()
export class DeleteManyStoresOnMenusArgs {

    @Field(() => StoresOnMenusWhereInput, {nullable:true})
    where?: StoresOnMenusWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusUpdateManyMutationInput } from './stores-on-menus-update-many-mutation.input';
import { StoresOnMenusWhereInput } from './stores-on-menus-where.input';

@ArgsType()
export class UpdateManyStoresOnMenusArgs {

    @Field(() => StoresOnMenusUpdateManyMutationInput, {nullable:false})
    data!: StoresOnMenusUpdateManyMutationInput;

    @Field(() => StoresOnMenusWhereInput, {nullable:true})
    where?: StoresOnMenusWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusScalarWhereInput } from './stores-on-menus-scalar-where.input';
import { StoresOnMenusUpdateManyMutationInput } from './stores-on-menus-update-many-mutation.input';

@InputType()
export class StoresOnMenusUpdateManyWithWhereWithoutStoreInput {

    @Field(() => StoresOnMenusScalarWhereInput, {nullable:false})
    where!: StoresOnMenusScalarWhereInput;

    @Field(() => StoresOnMenusUpdateManyMutationInput, {nullable:false})
    data!: StoresOnMenusUpdateManyMutationInput;
}

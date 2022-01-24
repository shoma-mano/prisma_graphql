import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuScalarWhereInput } from './menu-scalar-where.input';
import { MenuUpdateManyMutationInput } from './menu-update-many-mutation.input';

@InputType()
export class MenuUpdateManyWithWhereWithoutStoresInput {

    @Field(() => MenuScalarWhereInput, {nullable:false})
    where!: MenuScalarWhereInput;

    @Field(() => MenuUpdateManyMutationInput, {nullable:false})
    data!: MenuUpdateManyMutationInput;
}

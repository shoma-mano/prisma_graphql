import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuUpdateManyMutationInput } from './menu-update-many-mutation.input';
import { MenuWhereInput } from './menu-where.input';

@ArgsType()
export class UpdateManyMenuArgs {

    @Field(() => MenuUpdateManyMutationInput, {nullable:false})
    data!: MenuUpdateManyMutationInput;

    @Field(() => MenuWhereInput, {nullable:true})
    where?: MenuWhereInput;
}

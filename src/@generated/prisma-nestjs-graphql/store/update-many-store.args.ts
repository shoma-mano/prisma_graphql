import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreUpdateManyMutationInput } from './store-update-many-mutation.input';
import { StoreWhereInput } from './store-where.input';

@ArgsType()
export class UpdateManyStoreArgs {

    @Field(() => StoreUpdateManyMutationInput, {nullable:false})
    data!: StoreUpdateManyMutationInput;

    @Field(() => StoreWhereInput, {nullable:true})
    where?: StoreWhereInput;
}

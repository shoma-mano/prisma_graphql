import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreUpdateInput } from './store-update.input';
import { StoreWhereUniqueInput } from './store-where-unique.input';

@ArgsType()
export class UpdateOneStoreArgs {

    @Field(() => StoreUpdateInput, {nullable:false})
    data!: StoreUpdateInput;

    @Field(() => StoreWhereUniqueInput, {nullable:false})
    where!: StoreWhereUniqueInput;
}

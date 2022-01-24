import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreWhereUniqueInput } from './store-where-unique.input';
import { StoreCreateInput } from './store-create.input';
import { StoreUpdateInput } from './store-update.input';

@ArgsType()
export class UpsertOneStoreArgs {

    @Field(() => StoreWhereUniqueInput, {nullable:false})
    where!: StoreWhereUniqueInput;

    @Field(() => StoreCreateInput, {nullable:false})
    create!: StoreCreateInput;

    @Field(() => StoreUpdateInput, {nullable:false})
    update!: StoreUpdateInput;
}

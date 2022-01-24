import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreWhereUniqueInput } from './store-where-unique.input';

@ArgsType()
export class DeleteOneStoreArgs {

    @Field(() => StoreWhereUniqueInput, {nullable:false})
    where!: StoreWhereUniqueInput;
}

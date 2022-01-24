import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreWhereInput } from './store-where.input';

@ArgsType()
export class DeleteManyStoreArgs {

    @Field(() => StoreWhereInput, {nullable:true})
    where?: StoreWhereInput;
}

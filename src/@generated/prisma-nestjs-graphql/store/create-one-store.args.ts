import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreCreateInput } from './store-create.input';

@ArgsType()
export class CreateOneStoreArgs {

    @Field(() => StoreCreateInput, {nullable:false})
    data!: StoreCreateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreCreateManyInput } from './store-create-many.input';

@ArgsType()
export class CreateManyStoreArgs {

    @Field(() => [StoreCreateManyInput], {nullable:false})
    data!: Array<StoreCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

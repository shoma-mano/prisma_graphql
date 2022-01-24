import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusCreateManyStoreInput } from './stores-on-menus-create-many-store.input';

@InputType()
export class StoresOnMenusCreateManyStoreInputEnvelope {

    @Field(() => [StoresOnMenusCreateManyStoreInput], {nullable:false})
    data!: Array<StoresOnMenusCreateManyStoreInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

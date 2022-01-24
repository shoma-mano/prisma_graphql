import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusCreateManyInput } from './stores-on-menus-create-many.input';

@ArgsType()
export class CreateManyStoresOnMenusArgs {

    @Field(() => [StoresOnMenusCreateManyInput], {nullable:false})
    data!: Array<StoresOnMenusCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { StoresOnMenusUpdateWithoutStoreInput } from './stores-on-menus-update-without-store.input';

@InputType()
export class StoresOnMenusUpdateWithWhereUniqueWithoutStoreInput {

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:false})
    where!: StoresOnMenusWhereUniqueInput;

    @Field(() => StoresOnMenusUpdateWithoutStoreInput, {nullable:false})
    data!: StoresOnMenusUpdateWithoutStoreInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { StoresOnMenusCreateWithoutStoreInput } from './stores-on-menus-create-without-store.input';

@InputType()
export class StoresOnMenusCreateOrConnectWithoutStoreInput {

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:false})
    where!: StoresOnMenusWhereUniqueInput;

    @Field(() => StoresOnMenusCreateWithoutStoreInput, {nullable:false})
    create!: StoresOnMenusCreateWithoutStoreInput;
}

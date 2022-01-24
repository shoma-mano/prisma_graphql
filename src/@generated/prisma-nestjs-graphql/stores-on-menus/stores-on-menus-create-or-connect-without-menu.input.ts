import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { StoresOnMenusCreateWithoutMenuInput } from './stores-on-menus-create-without-menu.input';

@InputType()
export class StoresOnMenusCreateOrConnectWithoutMenuInput {

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:false})
    where!: StoresOnMenusWhereUniqueInput;

    @Field(() => StoresOnMenusCreateWithoutMenuInput, {nullable:false})
    create!: StoresOnMenusCreateWithoutMenuInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { StoresOnMenusUpdateWithoutMenuInput } from './stores-on-menus-update-without-menu.input';
import { StoresOnMenusCreateWithoutMenuInput } from './stores-on-menus-create-without-menu.input';

@InputType()
export class StoresOnMenusUpsertWithWhereUniqueWithoutMenuInput {

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:false})
    where!: StoresOnMenusWhereUniqueInput;

    @Field(() => StoresOnMenusUpdateWithoutMenuInput, {nullable:false})
    update!: StoresOnMenusUpdateWithoutMenuInput;

    @Field(() => StoresOnMenusCreateWithoutMenuInput, {nullable:false})
    create!: StoresOnMenusCreateWithoutMenuInput;
}

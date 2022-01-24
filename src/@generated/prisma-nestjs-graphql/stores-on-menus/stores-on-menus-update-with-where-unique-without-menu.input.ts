import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { StoresOnMenusUpdateWithoutMenuInput } from './stores-on-menus-update-without-menu.input';

@InputType()
export class StoresOnMenusUpdateWithWhereUniqueWithoutMenuInput {

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:false})
    where!: StoresOnMenusWhereUniqueInput;

    @Field(() => StoresOnMenusUpdateWithoutMenuInput, {nullable:false})
    data!: StoresOnMenusUpdateWithoutMenuInput;
}

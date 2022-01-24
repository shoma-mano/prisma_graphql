import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusUpdateManyWithoutMenuInput } from '../stores-on-menus/stores-on-menus-update-many-without-menu.input';

@InputType()
export class MenuUpdateWithoutDetailInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => StoresOnMenusUpdateManyWithoutMenuInput, {nullable:true})
    stores?: StoresOnMenusUpdateManyWithoutMenuInput;
}

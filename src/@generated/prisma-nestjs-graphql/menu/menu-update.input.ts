import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUpdateOneWithoutMenuInput } from '../detail/detail-update-one-without-menu.input';
import { StoresOnMenusUpdateManyWithoutMenuInput } from '../stores-on-menus/stores-on-menus-update-many-without-menu.input';

@InputType()
export class MenuUpdateInput {

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

    @Field(() => DetailUpdateOneWithoutMenuInput, {nullable:true})
    detail?: DetailUpdateOneWithoutMenuInput;

    @Field(() => StoresOnMenusUpdateManyWithoutMenuInput, {nullable:true})
    stores?: StoresOnMenusUpdateManyWithoutMenuInput;
}

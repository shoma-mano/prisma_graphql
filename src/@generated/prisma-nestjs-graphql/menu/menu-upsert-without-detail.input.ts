import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuUpdateWithoutDetailInput } from './menu-update-without-detail.input';
import { MenuCreateWithoutDetailInput } from './menu-create-without-detail.input';

@InputType()
export class MenuUpsertWithoutDetailInput {

    @Field(() => MenuUpdateWithoutDetailInput, {nullable:false})
    update!: MenuUpdateWithoutDetailInput;

    @Field(() => MenuCreateWithoutDetailInput, {nullable:false})
    create!: MenuCreateWithoutDetailInput;
}

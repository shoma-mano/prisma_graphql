import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemUpdateWithoutDetailInput } from './item-update-without-detail.input';
import { ItemCreateWithoutDetailInput } from './item-create-without-detail.input';

@InputType()
export class ItemUpsertWithoutDetailInput {

    @Field(() => ItemUpdateWithoutDetailInput, {nullable:false})
    update!: ItemUpdateWithoutDetailInput;

    @Field(() => ItemCreateWithoutDetailInput, {nullable:false})
    create!: ItemCreateWithoutDetailInput;
}

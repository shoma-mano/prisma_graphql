import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemCreateWithoutDetailInput } from './item-create-without-detail.input';

@InputType()
export class ItemCreateOrConnectWithoutDetailInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    where!: ItemWhereUniqueInput;

    @Field(() => ItemCreateWithoutDetailInput, {nullable:false})
    create!: ItemCreateWithoutDetailInput;
}

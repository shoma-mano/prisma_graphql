import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutDetailInput } from './item-create-without-detail.input';
import { ItemCreateOrConnectWithoutDetailInput } from './item-create-or-connect-without-detail.input';
import { ItemUpsertWithoutDetailInput } from './item-upsert-without-detail.input';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemUpdateWithoutDetailInput } from './item-update-without-detail.input';

@InputType()
export class ItemUncheckedUpdateOneWithoutDetailInput {

    @Field(() => ItemCreateWithoutDetailInput, {nullable:true})
    create?: ItemCreateWithoutDetailInput;

    @Field(() => ItemCreateOrConnectWithoutDetailInput, {nullable:true})
    connectOrCreate?: ItemCreateOrConnectWithoutDetailInput;

    @Field(() => ItemUpsertWithoutDetailInput, {nullable:true})
    upsert?: ItemUpsertWithoutDetailInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ItemWhereUniqueInput, {nullable:true})
    connect?: ItemWhereUniqueInput;

    @Field(() => ItemUpdateWithoutDetailInput, {nullable:true})
    update?: ItemUpdateWithoutDetailInput;
}

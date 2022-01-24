import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutDetailInput } from './item-create-without-detail.input';
import { ItemCreateOrConnectWithoutDetailInput } from './item-create-or-connect-without-detail.input';
import { ItemWhereUniqueInput } from './item-where-unique.input';

@InputType()
export class ItemCreateNestedOneWithoutDetailInput {

    @Field(() => ItemCreateWithoutDetailInput, {nullable:true})
    create?: ItemCreateWithoutDetailInput;

    @Field(() => ItemCreateOrConnectWithoutDetailInput, {nullable:true})
    connectOrCreate?: ItemCreateOrConnectWithoutDetailInput;

    @Field(() => ItemWhereUniqueInput, {nullable:true})
    connect?: ItemWhereUniqueInput;
}

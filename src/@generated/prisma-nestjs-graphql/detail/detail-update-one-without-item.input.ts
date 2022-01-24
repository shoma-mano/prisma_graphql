import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutItemInput } from './detail-create-without-item.input';
import { DetailCreateOrConnectWithoutItemInput } from './detail-create-or-connect-without-item.input';
import { DetailUpsertWithoutItemInput } from './detail-upsert-without-item.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailUpdateWithoutItemInput } from './detail-update-without-item.input';

@InputType()
export class DetailUpdateOneWithoutItemInput {

    @Field(() => DetailCreateWithoutItemInput, {nullable:true})
    create?: DetailCreateWithoutItemInput;

    @Field(() => DetailCreateOrConnectWithoutItemInput, {nullable:true})
    connectOrCreate?: DetailCreateOrConnectWithoutItemInput;

    @Field(() => DetailUpsertWithoutItemInput, {nullable:true})
    upsert?: DetailUpsertWithoutItemInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DetailWhereUniqueInput, {nullable:true})
    connect?: DetailWhereUniqueInput;

    @Field(() => DetailUpdateWithoutItemInput, {nullable:true})
    update?: DetailUpdateWithoutItemInput;
}

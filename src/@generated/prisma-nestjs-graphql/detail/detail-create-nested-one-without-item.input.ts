import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutItemInput } from './detail-create-without-item.input';
import { DetailCreateOrConnectWithoutItemInput } from './detail-create-or-connect-without-item.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@InputType()
export class DetailCreateNestedOneWithoutItemInput {

    @Field(() => DetailCreateWithoutItemInput, {nullable:true})
    create?: DetailCreateWithoutItemInput;

    @Field(() => DetailCreateOrConnectWithoutItemInput, {nullable:true})
    connectOrCreate?: DetailCreateOrConnectWithoutItemInput;

    @Field(() => DetailWhereUniqueInput, {nullable:true})
    connect?: DetailWhereUniqueInput;
}

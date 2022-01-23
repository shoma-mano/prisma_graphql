import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutMenuInput } from './detail-create-without-menu.input';
import { DetailCreateOrConnectWithoutMenuInput } from './detail-create-or-connect-without-menu.input';
import { DetailUpsertWithoutMenuInput } from './detail-upsert-without-menu.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailUpdateWithoutMenuInput } from './detail-update-without-menu.input';

@InputType()
export class DetailUpdateOneWithoutMenuInput {

    @Field(() => DetailCreateWithoutMenuInput, {nullable:true})
    create?: DetailCreateWithoutMenuInput;

    @Field(() => DetailCreateOrConnectWithoutMenuInput, {nullable:true})
    connectOrCreate?: DetailCreateOrConnectWithoutMenuInput;

    @Field(() => DetailUpsertWithoutMenuInput, {nullable:true})
    upsert?: DetailUpsertWithoutMenuInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DetailWhereUniqueInput, {nullable:true})
    connect?: DetailWhereUniqueInput;

    @Field(() => DetailUpdateWithoutMenuInput, {nullable:true})
    update?: DetailUpdateWithoutMenuInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutOptionsInput } from './detail-create-without-options.input';
import { DetailCreateOrConnectWithoutOptionsInput } from './detail-create-or-connect-without-options.input';
import { DetailUpsertWithoutOptionsInput } from './detail-upsert-without-options.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailUpdateWithoutOptionsInput } from './detail-update-without-options.input';

@InputType()
export class DetailUpdateOneRequiredWithoutOptionsInput {

    @Field(() => DetailCreateWithoutOptionsInput, {nullable:true})
    create?: DetailCreateWithoutOptionsInput;

    @Field(() => DetailCreateOrConnectWithoutOptionsInput, {nullable:true})
    connectOrCreate?: DetailCreateOrConnectWithoutOptionsInput;

    @Field(() => DetailUpsertWithoutOptionsInput, {nullable:true})
    upsert?: DetailUpsertWithoutOptionsInput;

    @Field(() => DetailWhereUniqueInput, {nullable:true})
    connect?: DetailWhereUniqueInput;

    @Field(() => DetailUpdateWithoutOptionsInput, {nullable:true})
    update?: DetailUpdateWithoutOptionsInput;
}

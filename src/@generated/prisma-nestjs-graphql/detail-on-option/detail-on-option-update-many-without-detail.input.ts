import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionCreateWithoutDetailInput } from './detail-on-option-create-without-detail.input';
import { DetailOnOptionCreateOrConnectWithoutDetailInput } from './detail-on-option-create-or-connect-without-detail.input';
import { DetailOnOptionUpsertWithWhereUniqueWithoutDetailInput } from './detail-on-option-upsert-with-where-unique-without-detail.input';
import { DetailOnOptionCreateManyDetailInputEnvelope } from './detail-on-option-create-many-detail-input-envelope.input';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionUpdateWithWhereUniqueWithoutDetailInput } from './detail-on-option-update-with-where-unique-without-detail.input';
import { DetailOnOptionUpdateManyWithWhereWithoutDetailInput } from './detail-on-option-update-many-with-where-without-detail.input';
import { DetailOnOptionScalarWhereInput } from './detail-on-option-scalar-where.input';

@InputType()
export class DetailOnOptionUpdateManyWithoutDetailInput {

    @Field(() => [DetailOnOptionCreateWithoutDetailInput], {nullable:true})
    create?: Array<DetailOnOptionCreateWithoutDetailInput>;

    @Field(() => [DetailOnOptionCreateOrConnectWithoutDetailInput], {nullable:true})
    connectOrCreate?: Array<DetailOnOptionCreateOrConnectWithoutDetailInput>;

    @Field(() => [DetailOnOptionUpsertWithWhereUniqueWithoutDetailInput], {nullable:true})
    upsert?: Array<DetailOnOptionUpsertWithWhereUniqueWithoutDetailInput>;

    @Field(() => DetailOnOptionCreateManyDetailInputEnvelope, {nullable:true})
    createMany?: DetailOnOptionCreateManyDetailInputEnvelope;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    set?: Array<DetailOnOptionWhereUniqueInput>;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    disconnect?: Array<DetailOnOptionWhereUniqueInput>;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    delete?: Array<DetailOnOptionWhereUniqueInput>;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    connect?: Array<DetailOnOptionWhereUniqueInput>;

    @Field(() => [DetailOnOptionUpdateWithWhereUniqueWithoutDetailInput], {nullable:true})
    update?: Array<DetailOnOptionUpdateWithWhereUniqueWithoutDetailInput>;

    @Field(() => [DetailOnOptionUpdateManyWithWhereWithoutDetailInput], {nullable:true})
    updateMany?: Array<DetailOnOptionUpdateManyWithWhereWithoutDetailInput>;

    @Field(() => [DetailOnOptionScalarWhereInput], {nullable:true})
    deleteMany?: Array<DetailOnOptionScalarWhereInput>;
}

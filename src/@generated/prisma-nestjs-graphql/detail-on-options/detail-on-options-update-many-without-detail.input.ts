import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsCreateWithoutDetailInput } from './detail-on-options-create-without-detail.input';
import { DetailOnOptionsCreateOrConnectWithoutDetailInput } from './detail-on-options-create-or-connect-without-detail.input';
import { DetailOnOptionsUpsertWithWhereUniqueWithoutDetailInput } from './detail-on-options-upsert-with-where-unique-without-detail.input';
import { DetailOnOptionsCreateManyDetailInputEnvelope } from './detail-on-options-create-many-detail-input-envelope.input';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsUpdateWithWhereUniqueWithoutDetailInput } from './detail-on-options-update-with-where-unique-without-detail.input';
import { DetailOnOptionsUpdateManyWithWhereWithoutDetailInput } from './detail-on-options-update-many-with-where-without-detail.input';
import { DetailOnOptionsScalarWhereInput } from './detail-on-options-scalar-where.input';

@InputType()
export class DetailOnOptionsUpdateManyWithoutDetailInput {

    @Field(() => [DetailOnOptionsCreateWithoutDetailInput], {nullable:true})
    create?: Array<DetailOnOptionsCreateWithoutDetailInput>;

    @Field(() => [DetailOnOptionsCreateOrConnectWithoutDetailInput], {nullable:true})
    connectOrCreate?: Array<DetailOnOptionsCreateOrConnectWithoutDetailInput>;

    @Field(() => [DetailOnOptionsUpsertWithWhereUniqueWithoutDetailInput], {nullable:true})
    upsert?: Array<DetailOnOptionsUpsertWithWhereUniqueWithoutDetailInput>;

    @Field(() => DetailOnOptionsCreateManyDetailInputEnvelope, {nullable:true})
    createMany?: DetailOnOptionsCreateManyDetailInputEnvelope;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    set?: Array<DetailOnOptionsWhereUniqueInput>;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    disconnect?: Array<DetailOnOptionsWhereUniqueInput>;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    delete?: Array<DetailOnOptionsWhereUniqueInput>;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    connect?: Array<DetailOnOptionsWhereUniqueInput>;

    @Field(() => [DetailOnOptionsUpdateWithWhereUniqueWithoutDetailInput], {nullable:true})
    update?: Array<DetailOnOptionsUpdateWithWhereUniqueWithoutDetailInput>;

    @Field(() => [DetailOnOptionsUpdateManyWithWhereWithoutDetailInput], {nullable:true})
    updateMany?: Array<DetailOnOptionsUpdateManyWithWhereWithoutDetailInput>;

    @Field(() => [DetailOnOptionsScalarWhereInput], {nullable:true})
    deleteMany?: Array<DetailOnOptionsScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionCreateWithoutOptionInput } from './detail-on-option-create-without-option.input';
import { DetailOnOptionCreateOrConnectWithoutOptionInput } from './detail-on-option-create-or-connect-without-option.input';
import { DetailOnOptionUpsertWithWhereUniqueWithoutOptionInput } from './detail-on-option-upsert-with-where-unique-without-option.input';
import { DetailOnOptionCreateManyOptionInputEnvelope } from './detail-on-option-create-many-option-input-envelope.input';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionUpdateWithWhereUniqueWithoutOptionInput } from './detail-on-option-update-with-where-unique-without-option.input';
import { DetailOnOptionUpdateManyWithWhereWithoutOptionInput } from './detail-on-option-update-many-with-where-without-option.input';
import { DetailOnOptionScalarWhereInput } from './detail-on-option-scalar-where.input';

@InputType()
export class DetailOnOptionUpdateManyWithoutOptionInput {

    @Field(() => [DetailOnOptionCreateWithoutOptionInput], {nullable:true})
    create?: Array<DetailOnOptionCreateWithoutOptionInput>;

    @Field(() => [DetailOnOptionCreateOrConnectWithoutOptionInput], {nullable:true})
    connectOrCreate?: Array<DetailOnOptionCreateOrConnectWithoutOptionInput>;

    @Field(() => [DetailOnOptionUpsertWithWhereUniqueWithoutOptionInput], {nullable:true})
    upsert?: Array<DetailOnOptionUpsertWithWhereUniqueWithoutOptionInput>;

    @Field(() => DetailOnOptionCreateManyOptionInputEnvelope, {nullable:true})
    createMany?: DetailOnOptionCreateManyOptionInputEnvelope;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    set?: Array<DetailOnOptionWhereUniqueInput>;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    disconnect?: Array<DetailOnOptionWhereUniqueInput>;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    delete?: Array<DetailOnOptionWhereUniqueInput>;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    connect?: Array<DetailOnOptionWhereUniqueInput>;

    @Field(() => [DetailOnOptionUpdateWithWhereUniqueWithoutOptionInput], {nullable:true})
    update?: Array<DetailOnOptionUpdateWithWhereUniqueWithoutOptionInput>;

    @Field(() => [DetailOnOptionUpdateManyWithWhereWithoutOptionInput], {nullable:true})
    updateMany?: Array<DetailOnOptionUpdateManyWithWhereWithoutOptionInput>;

    @Field(() => [DetailOnOptionScalarWhereInput], {nullable:true})
    deleteMany?: Array<DetailOnOptionScalarWhereInput>;
}

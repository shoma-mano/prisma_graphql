import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsCreateWithoutOptionInput } from './detail-on-options-create-without-option.input';
import { DetailOnOptionsCreateOrConnectWithoutOptionInput } from './detail-on-options-create-or-connect-without-option.input';
import { DetailOnOptionsUpsertWithWhereUniqueWithoutOptionInput } from './detail-on-options-upsert-with-where-unique-without-option.input';
import { DetailOnOptionsCreateManyOptionInputEnvelope } from './detail-on-options-create-many-option-input-envelope.input';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsUpdateWithWhereUniqueWithoutOptionInput } from './detail-on-options-update-with-where-unique-without-option.input';
import { DetailOnOptionsUpdateManyWithWhereWithoutOptionInput } from './detail-on-options-update-many-with-where-without-option.input';
import { DetailOnOptionsScalarWhereInput } from './detail-on-options-scalar-where.input';

@InputType()
export class DetailOnOptionsUpdateManyWithoutOptionInput {

    @Field(() => [DetailOnOptionsCreateWithoutOptionInput], {nullable:true})
    create?: Array<DetailOnOptionsCreateWithoutOptionInput>;

    @Field(() => [DetailOnOptionsCreateOrConnectWithoutOptionInput], {nullable:true})
    connectOrCreate?: Array<DetailOnOptionsCreateOrConnectWithoutOptionInput>;

    @Field(() => [DetailOnOptionsUpsertWithWhereUniqueWithoutOptionInput], {nullable:true})
    upsert?: Array<DetailOnOptionsUpsertWithWhereUniqueWithoutOptionInput>;

    @Field(() => DetailOnOptionsCreateManyOptionInputEnvelope, {nullable:true})
    createMany?: DetailOnOptionsCreateManyOptionInputEnvelope;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    set?: Array<DetailOnOptionsWhereUniqueInput>;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    disconnect?: Array<DetailOnOptionsWhereUniqueInput>;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    delete?: Array<DetailOnOptionsWhereUniqueInput>;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    connect?: Array<DetailOnOptionsWhereUniqueInput>;

    @Field(() => [DetailOnOptionsUpdateWithWhereUniqueWithoutOptionInput], {nullable:true})
    update?: Array<DetailOnOptionsUpdateWithWhereUniqueWithoutOptionInput>;

    @Field(() => [DetailOnOptionsUpdateManyWithWhereWithoutOptionInput], {nullable:true})
    updateMany?: Array<DetailOnOptionsUpdateManyWithWhereWithoutOptionInput>;

    @Field(() => [DetailOnOptionsScalarWhereInput], {nullable:true})
    deleteMany?: Array<DetailOnOptionsScalarWhereInput>;
}

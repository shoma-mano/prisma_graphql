import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsCreateWithoutOptionInput } from './detail-on-options-create-without-option.input';
import { DetailOnOptionsCreateOrConnectWithoutOptionInput } from './detail-on-options-create-or-connect-without-option.input';
import { DetailOnOptionsCreateManyOptionInputEnvelope } from './detail-on-options-create-many-option-input-envelope.input';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';

@InputType()
export class DetailOnOptionsUncheckedCreateNestedManyWithoutOptionInput {

    @Field(() => [DetailOnOptionsCreateWithoutOptionInput], {nullable:true})
    create?: Array<DetailOnOptionsCreateWithoutOptionInput>;

    @Field(() => [DetailOnOptionsCreateOrConnectWithoutOptionInput], {nullable:true})
    connectOrCreate?: Array<DetailOnOptionsCreateOrConnectWithoutOptionInput>;

    @Field(() => DetailOnOptionsCreateManyOptionInputEnvelope, {nullable:true})
    createMany?: DetailOnOptionsCreateManyOptionInputEnvelope;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    connect?: Array<DetailOnOptionsWhereUniqueInput>;
}

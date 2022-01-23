import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsCreateWithoutDetailInput } from './detail-on-options-create-without-detail.input';
import { DetailOnOptionsCreateOrConnectWithoutDetailInput } from './detail-on-options-create-or-connect-without-detail.input';
import { DetailOnOptionsCreateManyDetailInputEnvelope } from './detail-on-options-create-many-detail-input-envelope.input';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';

@InputType()
export class DetailOnOptionsCreateNestedManyWithoutDetailInput {

    @Field(() => [DetailOnOptionsCreateWithoutDetailInput], {nullable:true})
    create?: Array<DetailOnOptionsCreateWithoutDetailInput>;

    @Field(() => [DetailOnOptionsCreateOrConnectWithoutDetailInput], {nullable:true})
    connectOrCreate?: Array<DetailOnOptionsCreateOrConnectWithoutDetailInput>;

    @Field(() => DetailOnOptionsCreateManyDetailInputEnvelope, {nullable:true})
    createMany?: DetailOnOptionsCreateManyDetailInputEnvelope;

    @Field(() => [DetailOnOptionsWhereUniqueInput], {nullable:true})
    connect?: Array<DetailOnOptionsWhereUniqueInput>;
}

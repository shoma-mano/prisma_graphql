import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionCreateWithoutDetailInput } from './detail-on-option-create-without-detail.input';
import { DetailOnOptionCreateOrConnectWithoutDetailInput } from './detail-on-option-create-or-connect-without-detail.input';
import { DetailOnOptionCreateManyDetailInputEnvelope } from './detail-on-option-create-many-detail-input-envelope.input';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';

@InputType()
export class DetailOnOptionCreateNestedManyWithoutDetailInput {

    @Field(() => [DetailOnOptionCreateWithoutDetailInput], {nullable:true})
    create?: Array<DetailOnOptionCreateWithoutDetailInput>;

    @Field(() => [DetailOnOptionCreateOrConnectWithoutDetailInput], {nullable:true})
    connectOrCreate?: Array<DetailOnOptionCreateOrConnectWithoutDetailInput>;

    @Field(() => DetailOnOptionCreateManyDetailInputEnvelope, {nullable:true})
    createMany?: DetailOnOptionCreateManyDetailInputEnvelope;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    connect?: Array<DetailOnOptionWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionCreateWithoutOptionInput } from './detail-on-option-create-without-option.input';
import { DetailOnOptionCreateOrConnectWithoutOptionInput } from './detail-on-option-create-or-connect-without-option.input';
import { DetailOnOptionCreateManyOptionInputEnvelope } from './detail-on-option-create-many-option-input-envelope.input';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';

@InputType()
export class DetailOnOptionUncheckedCreateNestedManyWithoutOptionInput {

    @Field(() => [DetailOnOptionCreateWithoutOptionInput], {nullable:true})
    create?: Array<DetailOnOptionCreateWithoutOptionInput>;

    @Field(() => [DetailOnOptionCreateOrConnectWithoutOptionInput], {nullable:true})
    connectOrCreate?: Array<DetailOnOptionCreateOrConnectWithoutOptionInput>;

    @Field(() => DetailOnOptionCreateManyOptionInputEnvelope, {nullable:true})
    createMany?: DetailOnOptionCreateManyOptionInputEnvelope;

    @Field(() => [DetailOnOptionWhereUniqueInput], {nullable:true})
    connect?: Array<DetailOnOptionWhereUniqueInput>;
}

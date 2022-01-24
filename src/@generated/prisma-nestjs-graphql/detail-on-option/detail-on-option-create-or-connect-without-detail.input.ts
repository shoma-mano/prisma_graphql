import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionCreateWithoutDetailInput } from './detail-on-option-create-without-detail.input';

@InputType()
export class DetailOnOptionCreateOrConnectWithoutDetailInput {

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;

    @Field(() => DetailOnOptionCreateWithoutDetailInput, {nullable:false})
    create!: DetailOnOptionCreateWithoutDetailInput;
}

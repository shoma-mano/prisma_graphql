import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionUpdateWithoutDetailInput } from './detail-on-option-update-without-detail.input';
import { DetailOnOptionCreateWithoutDetailInput } from './detail-on-option-create-without-detail.input';

@InputType()
export class DetailOnOptionUpsertWithWhereUniqueWithoutDetailInput {

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;

    @Field(() => DetailOnOptionUpdateWithoutDetailInput, {nullable:false})
    update!: DetailOnOptionUpdateWithoutDetailInput;

    @Field(() => DetailOnOptionCreateWithoutDetailInput, {nullable:false})
    create!: DetailOnOptionCreateWithoutDetailInput;
}

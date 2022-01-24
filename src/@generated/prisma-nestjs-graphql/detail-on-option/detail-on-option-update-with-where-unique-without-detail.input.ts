import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionUpdateWithoutDetailInput } from './detail-on-option-update-without-detail.input';

@InputType()
export class DetailOnOptionUpdateWithWhereUniqueWithoutDetailInput {

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;

    @Field(() => DetailOnOptionUpdateWithoutDetailInput, {nullable:false})
    data!: DetailOnOptionUpdateWithoutDetailInput;
}

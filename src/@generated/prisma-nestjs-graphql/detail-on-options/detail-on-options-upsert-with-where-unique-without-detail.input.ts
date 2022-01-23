import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsUpdateWithoutDetailInput } from './detail-on-options-update-without-detail.input';
import { DetailOnOptionsCreateWithoutDetailInput } from './detail-on-options-create-without-detail.input';

@InputType()
export class DetailOnOptionsUpsertWithWhereUniqueWithoutDetailInput {

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;

    @Field(() => DetailOnOptionsUpdateWithoutDetailInput, {nullable:false})
    update!: DetailOnOptionsUpdateWithoutDetailInput;

    @Field(() => DetailOnOptionsCreateWithoutDetailInput, {nullable:false})
    create!: DetailOnOptionsCreateWithoutDetailInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsUpdateWithoutDetailInput } from './detail-on-options-update-without-detail.input';

@InputType()
export class DetailOnOptionsUpdateWithWhereUniqueWithoutDetailInput {

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;

    @Field(() => DetailOnOptionsUpdateWithoutDetailInput, {nullable:false})
    data!: DetailOnOptionsUpdateWithoutDetailInput;
}

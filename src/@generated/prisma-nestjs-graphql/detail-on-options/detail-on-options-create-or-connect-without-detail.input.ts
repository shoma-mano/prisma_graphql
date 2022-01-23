import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsCreateWithoutDetailInput } from './detail-on-options-create-without-detail.input';

@InputType()
export class DetailOnOptionsCreateOrConnectWithoutDetailInput {

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;

    @Field(() => DetailOnOptionsCreateWithoutDetailInput, {nullable:false})
    create!: DetailOnOptionsCreateWithoutDetailInput;
}

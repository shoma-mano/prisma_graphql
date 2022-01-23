import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsCreateWithoutOptionInput } from './detail-on-options-create-without-option.input';

@InputType()
export class DetailOnOptionsCreateOrConnectWithoutOptionInput {

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;

    @Field(() => DetailOnOptionsCreateWithoutOptionInput, {nullable:false})
    create!: DetailOnOptionsCreateWithoutOptionInput;
}

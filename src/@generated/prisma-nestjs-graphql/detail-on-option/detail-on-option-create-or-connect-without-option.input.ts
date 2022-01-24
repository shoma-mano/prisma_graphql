import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionCreateWithoutOptionInput } from './detail-on-option-create-without-option.input';

@InputType()
export class DetailOnOptionCreateOrConnectWithoutOptionInput {

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;

    @Field(() => DetailOnOptionCreateWithoutOptionInput, {nullable:false})
    create!: DetailOnOptionCreateWithoutOptionInput;
}

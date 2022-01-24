import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionUpdateWithoutOptionInput } from './detail-on-option-update-without-option.input';

@InputType()
export class DetailOnOptionUpdateWithWhereUniqueWithoutOptionInput {

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;

    @Field(() => DetailOnOptionUpdateWithoutOptionInput, {nullable:false})
    data!: DetailOnOptionUpdateWithoutOptionInput;
}

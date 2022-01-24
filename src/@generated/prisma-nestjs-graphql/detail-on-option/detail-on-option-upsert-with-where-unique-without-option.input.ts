import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionUpdateWithoutOptionInput } from './detail-on-option-update-without-option.input';
import { DetailOnOptionCreateWithoutOptionInput } from './detail-on-option-create-without-option.input';

@InputType()
export class DetailOnOptionUpsertWithWhereUniqueWithoutOptionInput {

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;

    @Field(() => DetailOnOptionUpdateWithoutOptionInput, {nullable:false})
    update!: DetailOnOptionUpdateWithoutOptionInput;

    @Field(() => DetailOnOptionCreateWithoutOptionInput, {nullable:false})
    create!: DetailOnOptionCreateWithoutOptionInput;
}

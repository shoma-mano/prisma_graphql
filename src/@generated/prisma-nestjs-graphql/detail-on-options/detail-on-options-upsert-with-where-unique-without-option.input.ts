import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsUpdateWithoutOptionInput } from './detail-on-options-update-without-option.input';
import { DetailOnOptionsCreateWithoutOptionInput } from './detail-on-options-create-without-option.input';

@InputType()
export class DetailOnOptionsUpsertWithWhereUniqueWithoutOptionInput {

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;

    @Field(() => DetailOnOptionsUpdateWithoutOptionInput, {nullable:false})
    update!: DetailOnOptionsUpdateWithoutOptionInput;

    @Field(() => DetailOnOptionsCreateWithoutOptionInput, {nullable:false})
    create!: DetailOnOptionsCreateWithoutOptionInput;
}

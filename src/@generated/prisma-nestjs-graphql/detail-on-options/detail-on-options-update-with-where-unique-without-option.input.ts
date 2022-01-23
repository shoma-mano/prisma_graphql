import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsUpdateWithoutOptionInput } from './detail-on-options-update-without-option.input';

@InputType()
export class DetailOnOptionsUpdateWithWhereUniqueWithoutOptionInput {

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;

    @Field(() => DetailOnOptionsUpdateWithoutOptionInput, {nullable:false})
    data!: DetailOnOptionsUpdateWithoutOptionInput;
}

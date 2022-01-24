import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionUpdateInput } from './detail-on-option-update.input';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';

@ArgsType()
export class UpdateOneDetailOnOptionArgs {

    @Field(() => DetailOnOptionUpdateInput, {nullable:false})
    data!: DetailOnOptionUpdateInput;

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;
}

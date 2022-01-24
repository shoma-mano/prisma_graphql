import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { DetailOnOptionCreateInput } from './detail-on-option-create.input';
import { DetailOnOptionUpdateInput } from './detail-on-option-update.input';

@ArgsType()
export class UpsertOneDetailOnOptionArgs {

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;

    @Field(() => DetailOnOptionCreateInput, {nullable:false})
    create!: DetailOnOptionCreateInput;

    @Field(() => DetailOnOptionUpdateInput, {nullable:false})
    update!: DetailOnOptionUpdateInput;
}

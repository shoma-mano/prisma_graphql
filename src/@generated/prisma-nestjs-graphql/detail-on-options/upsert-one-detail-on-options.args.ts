import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { DetailOnOptionsCreateInput } from './detail-on-options-create.input';
import { DetailOnOptionsUpdateInput } from './detail-on-options-update.input';

@ArgsType()
export class UpsertOneDetailOnOptionsArgs {

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;

    @Field(() => DetailOnOptionsCreateInput, {nullable:false})
    create!: DetailOnOptionsCreateInput;

    @Field(() => DetailOnOptionsUpdateInput, {nullable:false})
    update!: DetailOnOptionsUpdateInput;
}

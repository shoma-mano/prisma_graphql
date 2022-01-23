import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsUpdateInput } from './detail-on-options-update.input';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';

@ArgsType()
export class UpdateOneDetailOnOptionsArgs {

    @Field(() => DetailOnOptionsUpdateInput, {nullable:false})
    data!: DetailOnOptionsUpdateInput;

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailCreateInput } from './detail-create.input';
import { DetailUpdateInput } from './detail-update.input';

@ArgsType()
export class UpsertOneDetailArgs {

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    where!: DetailWhereUniqueInput;

    @Field(() => DetailCreateInput, {nullable:false})
    create!: DetailCreateInput;

    @Field(() => DetailUpdateInput, {nullable:false})
    update!: DetailUpdateInput;
}

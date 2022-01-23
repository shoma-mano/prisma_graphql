import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailUpdateInput } from './detail-update.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@ArgsType()
export class UpdateOneDetailArgs {

    @Field(() => DetailUpdateInput, {nullable:false})
    data!: DetailUpdateInput;

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    where!: DetailWhereUniqueInput;
}

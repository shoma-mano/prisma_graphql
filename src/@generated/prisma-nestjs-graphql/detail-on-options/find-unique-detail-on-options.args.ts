import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';

@ArgsType()
export class FindUniqueDetailOnOptionsArgs {

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionsWhereUniqueInput;
}

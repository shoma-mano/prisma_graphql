import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';

@ArgsType()
export class FindUniqueDetailOnOptionArgs {

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:false})
    where!: DetailOnOptionWhereUniqueInput;
}

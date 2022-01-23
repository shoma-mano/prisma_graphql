import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@ArgsType()
export class FindUniqueDetailArgs {

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    where!: DetailWhereUniqueInput;
}

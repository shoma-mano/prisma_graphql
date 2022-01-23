import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailCreateInput } from './detail-create.input';

@ArgsType()
export class CreateOneDetailArgs {

    @Field(() => DetailCreateInput, {nullable:false})
    data!: DetailCreateInput;
}

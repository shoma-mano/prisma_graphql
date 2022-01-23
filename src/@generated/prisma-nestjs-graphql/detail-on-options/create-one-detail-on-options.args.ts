import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsCreateInput } from './detail-on-options-create.input';

@ArgsType()
export class CreateOneDetailOnOptionsArgs {

    @Field(() => DetailOnOptionsCreateInput, {nullable:false})
    data!: DetailOnOptionsCreateInput;
}

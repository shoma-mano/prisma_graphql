import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionCreateInput } from './detail-on-option-create.input';

@ArgsType()
export class CreateOneDetailOnOptionArgs {

    @Field(() => DetailOnOptionCreateInput, {nullable:false})
    data!: DetailOnOptionCreateInput;
}

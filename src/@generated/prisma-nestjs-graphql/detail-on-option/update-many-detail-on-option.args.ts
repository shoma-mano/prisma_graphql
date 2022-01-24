import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionUpdateManyMutationInput } from './detail-on-option-update-many-mutation.input';
import { DetailOnOptionWhereInput } from './detail-on-option-where.input';

@ArgsType()
export class UpdateManyDetailOnOptionArgs {

    @Field(() => DetailOnOptionUpdateManyMutationInput, {nullable:false})
    data!: DetailOnOptionUpdateManyMutationInput;

    @Field(() => DetailOnOptionWhereInput, {nullable:true})
    where?: DetailOnOptionWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsUpdateManyMutationInput } from './detail-on-options-update-many-mutation.input';
import { DetailOnOptionsWhereInput } from './detail-on-options-where.input';

@ArgsType()
export class UpdateManyDetailOnOptionsArgs {

    @Field(() => DetailOnOptionsUpdateManyMutationInput, {nullable:false})
    data!: DetailOnOptionsUpdateManyMutationInput;

    @Field(() => DetailOnOptionsWhereInput, {nullable:true})
    where?: DetailOnOptionsWhereInput;
}

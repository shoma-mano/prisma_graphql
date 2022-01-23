import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailUpdateManyMutationInput } from './detail-update-many-mutation.input';
import { DetailWhereInput } from './detail-where.input';

@ArgsType()
export class UpdateManyDetailArgs {

    @Field(() => DetailUpdateManyMutationInput, {nullable:false})
    data!: DetailUpdateManyMutationInput;

    @Field(() => DetailWhereInput, {nullable:true})
    where?: DetailWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsWhereInput } from './detail-on-options-where.input';

@ArgsType()
export class DeleteManyDetailOnOptionsArgs {

    @Field(() => DetailOnOptionsWhereInput, {nullable:true})
    where?: DetailOnOptionsWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionWhereInput } from './detail-on-option-where.input';

@ArgsType()
export class DeleteManyDetailOnOptionArgs {

    @Field(() => DetailOnOptionWhereInput, {nullable:true})
    where?: DetailOnOptionWhereInput;
}

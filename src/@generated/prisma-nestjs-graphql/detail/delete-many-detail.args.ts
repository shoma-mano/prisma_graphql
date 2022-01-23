import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailWhereInput } from './detail-where.input';

@ArgsType()
export class DeleteManyDetailArgs {

    @Field(() => DetailWhereInput, {nullable:true})
    where?: DetailWhereInput;
}

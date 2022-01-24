import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionWhereInput } from './detail-on-option-where.input';

@InputType()
export class DetailOnOptionListRelationFilter {

    @Field(() => DetailOnOptionWhereInput, {nullable:true})
    every?: DetailOnOptionWhereInput;

    @Field(() => DetailOnOptionWhereInput, {nullable:true})
    some?: DetailOnOptionWhereInput;

    @Field(() => DetailOnOptionWhereInput, {nullable:true})
    none?: DetailOnOptionWhereInput;
}

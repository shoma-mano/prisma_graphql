import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsWhereInput } from './detail-on-options-where.input';

@InputType()
export class DetailOnOptionsListRelationFilter {

    @Field(() => DetailOnOptionsWhereInput, {nullable:true})
    every?: DetailOnOptionsWhereInput;

    @Field(() => DetailOnOptionsWhereInput, {nullable:true})
    some?: DetailOnOptionsWhereInput;

    @Field(() => DetailOnOptionsWhereInput, {nullable:true})
    none?: DetailOnOptionsWhereInput;
}

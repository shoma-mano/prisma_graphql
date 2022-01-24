import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreWhereInput } from './store-where.input';

@InputType()
export class StoreRelationFilter {

    @Field(() => StoreWhereInput, {nullable:true})
    is?: StoreWhereInput;

    @Field(() => StoreWhereInput, {nullable:true})
    isNot?: StoreWhereInput;
}

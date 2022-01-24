import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreWhereInput } from './store-where.input';

@InputType()
export class StoreListRelationFilter {

    @Field(() => StoreWhereInput, {nullable:true})
    every?: StoreWhereInput;

    @Field(() => StoreWhereInput, {nullable:true})
    some?: StoreWhereInput;

    @Field(() => StoreWhereInput, {nullable:true})
    none?: StoreWhereInput;
}

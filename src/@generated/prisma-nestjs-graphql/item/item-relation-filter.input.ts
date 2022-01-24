import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereInput } from './item-where.input';

@InputType()
export class ItemRelationFilter {

    @Field(() => ItemWhereInput, {nullable:true})
    is?: ItemWhereInput;

    @Field(() => ItemWhereInput, {nullable:true})
    isNot?: ItemWhereInput;
}

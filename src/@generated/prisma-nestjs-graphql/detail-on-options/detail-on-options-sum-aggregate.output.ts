import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DetailOnOptionsSumAggregate {

    @Field(() => Int, {nullable:true})
    optionId?: number;

    @Field(() => Int, {nullable:true})
    detailId?: number;
}

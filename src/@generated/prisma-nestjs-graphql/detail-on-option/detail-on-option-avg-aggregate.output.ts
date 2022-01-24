import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DetailOnOptionAvgAggregate {

    @Field(() => Float, {nullable:true})
    optionId?: number;

    @Field(() => Float, {nullable:true})
    detailId?: number;
}

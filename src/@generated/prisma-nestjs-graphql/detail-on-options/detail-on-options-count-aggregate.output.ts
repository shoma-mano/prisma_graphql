import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DetailOnOptionsCountAggregate {

    @Field(() => Int, {nullable:false})
    optionId!: number;

    @Field(() => Int, {nullable:false})
    detailId!: number;

    @Field(() => Int, {nullable:false})
    assignedAt!: number;

    @Field(() => Int, {nullable:false})
    assignedBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

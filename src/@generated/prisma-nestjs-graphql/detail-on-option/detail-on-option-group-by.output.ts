import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionCountAggregate } from './detail-on-option-count-aggregate.output';
import { DetailOnOptionAvgAggregate } from './detail-on-option-avg-aggregate.output';
import { DetailOnOptionSumAggregate } from './detail-on-option-sum-aggregate.output';
import { DetailOnOptionMinAggregate } from './detail-on-option-min-aggregate.output';
import { DetailOnOptionMaxAggregate } from './detail-on-option-max-aggregate.output';

@ObjectType()
export class DetailOnOptionGroupBy {

    @Field(() => Int, {nullable:false})
    optionId!: number;

    @Field(() => Int, {nullable:false})
    detailId!: number;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => DetailOnOptionCountAggregate, {nullable:true})
    _count?: DetailOnOptionCountAggregate;

    @Field(() => DetailOnOptionAvgAggregate, {nullable:true})
    _avg?: DetailOnOptionAvgAggregate;

    @Field(() => DetailOnOptionSumAggregate, {nullable:true})
    _sum?: DetailOnOptionSumAggregate;

    @Field(() => DetailOnOptionMinAggregate, {nullable:true})
    _min?: DetailOnOptionMinAggregate;

    @Field(() => DetailOnOptionMaxAggregate, {nullable:true})
    _max?: DetailOnOptionMaxAggregate;
}

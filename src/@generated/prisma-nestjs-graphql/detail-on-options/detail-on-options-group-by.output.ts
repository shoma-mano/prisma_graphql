import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionsCountAggregate } from './detail-on-options-count-aggregate.output';
import { DetailOnOptionsAvgAggregate } from './detail-on-options-avg-aggregate.output';
import { DetailOnOptionsSumAggregate } from './detail-on-options-sum-aggregate.output';
import { DetailOnOptionsMinAggregate } from './detail-on-options-min-aggregate.output';
import { DetailOnOptionsMaxAggregate } from './detail-on-options-max-aggregate.output';

@ObjectType()
export class DetailOnOptionsGroupBy {

    @Field(() => Int, {nullable:false})
    optionId!: number;

    @Field(() => Int, {nullable:false})
    detailId!: number;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => DetailOnOptionsCountAggregate, {nullable:true})
    _count?: DetailOnOptionsCountAggregate;

    @Field(() => DetailOnOptionsAvgAggregate, {nullable:true})
    _avg?: DetailOnOptionsAvgAggregate;

    @Field(() => DetailOnOptionsSumAggregate, {nullable:true})
    _sum?: DetailOnOptionsSumAggregate;

    @Field(() => DetailOnOptionsMinAggregate, {nullable:true})
    _min?: DetailOnOptionsMinAggregate;

    @Field(() => DetailOnOptionsMaxAggregate, {nullable:true})
    _max?: DetailOnOptionsMaxAggregate;
}

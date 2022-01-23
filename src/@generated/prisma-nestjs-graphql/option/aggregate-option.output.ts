import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OptionCountAggregate } from './option-count-aggregate.output';
import { OptionAvgAggregate } from './option-avg-aggregate.output';
import { OptionSumAggregate } from './option-sum-aggregate.output';
import { OptionMinAggregate } from './option-min-aggregate.output';
import { OptionMaxAggregate } from './option-max-aggregate.output';

@ObjectType()
export class AggregateOption {

    @Field(() => OptionCountAggregate, {nullable:true})
    _count?: OptionCountAggregate;

    @Field(() => OptionAvgAggregate, {nullable:true})
    _avg?: OptionAvgAggregate;

    @Field(() => OptionSumAggregate, {nullable:true})
    _sum?: OptionSumAggregate;

    @Field(() => OptionMinAggregate, {nullable:true})
    _min?: OptionMinAggregate;

    @Field(() => OptionMaxAggregate, {nullable:true})
    _max?: OptionMaxAggregate;
}

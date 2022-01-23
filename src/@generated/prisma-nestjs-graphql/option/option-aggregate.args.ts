import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';
import { OptionOrderByWithRelationInput } from './option-order-by-with-relation.input';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OptionCountAggregateInput } from './option-count-aggregate.input';
import { OptionAvgAggregateInput } from './option-avg-aggregate.input';
import { OptionSumAggregateInput } from './option-sum-aggregate.input';
import { OptionMinAggregateInput } from './option-min-aggregate.input';
import { OptionMaxAggregateInput } from './option-max-aggregate.input';

@ArgsType()
export class OptionAggregateArgs {

    @Field(() => OptionWhereInput, {nullable:true})
    where?: OptionWhereInput;

    @Field(() => [OptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OptionOrderByWithRelationInput>;

    @Field(() => OptionWhereUniqueInput, {nullable:true})
    cursor?: OptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OptionCountAggregateInput, {nullable:true})
    _count?: OptionCountAggregateInput;

    @Field(() => OptionAvgAggregateInput, {nullable:true})
    _avg?: OptionAvgAggregateInput;

    @Field(() => OptionSumAggregateInput, {nullable:true})
    _sum?: OptionSumAggregateInput;

    @Field(() => OptionMinAggregateInput, {nullable:true})
    _min?: OptionMinAggregateInput;

    @Field(() => OptionMaxAggregateInput, {nullable:true})
    _max?: OptionMaxAggregateInput;
}

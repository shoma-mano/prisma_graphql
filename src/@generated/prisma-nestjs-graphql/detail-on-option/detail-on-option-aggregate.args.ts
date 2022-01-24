import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionWhereInput } from './detail-on-option-where.input';
import { DetailOnOptionOrderByWithRelationInput } from './detail-on-option-order-by-with-relation.input';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionCountAggregateInput } from './detail-on-option-count-aggregate.input';
import { DetailOnOptionAvgAggregateInput } from './detail-on-option-avg-aggregate.input';
import { DetailOnOptionSumAggregateInput } from './detail-on-option-sum-aggregate.input';
import { DetailOnOptionMinAggregateInput } from './detail-on-option-min-aggregate.input';
import { DetailOnOptionMaxAggregateInput } from './detail-on-option-max-aggregate.input';

@ArgsType()
export class DetailOnOptionAggregateArgs {

    @Field(() => DetailOnOptionWhereInput, {nullable:true})
    where?: DetailOnOptionWhereInput;

    @Field(() => [DetailOnOptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DetailOnOptionOrderByWithRelationInput>;

    @Field(() => DetailOnOptionWhereUniqueInput, {nullable:true})
    cursor?: DetailOnOptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DetailOnOptionCountAggregateInput, {nullable:true})
    _count?: DetailOnOptionCountAggregateInput;

    @Field(() => DetailOnOptionAvgAggregateInput, {nullable:true})
    _avg?: DetailOnOptionAvgAggregateInput;

    @Field(() => DetailOnOptionSumAggregateInput, {nullable:true})
    _sum?: DetailOnOptionSumAggregateInput;

    @Field(() => DetailOnOptionMinAggregateInput, {nullable:true})
    _min?: DetailOnOptionMinAggregateInput;

    @Field(() => DetailOnOptionMaxAggregateInput, {nullable:true})
    _max?: DetailOnOptionMaxAggregateInput;
}

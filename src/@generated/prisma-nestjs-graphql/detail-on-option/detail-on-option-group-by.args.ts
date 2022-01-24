import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionWhereInput } from './detail-on-option-where.input';
import { DetailOnOptionOrderByWithAggregationInput } from './detail-on-option-order-by-with-aggregation.input';
import { DetailOnOptionScalarFieldEnum } from './detail-on-option-scalar-field.enum';
import { DetailOnOptionScalarWhereWithAggregatesInput } from './detail-on-option-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionCountAggregateInput } from './detail-on-option-count-aggregate.input';
import { DetailOnOptionAvgAggregateInput } from './detail-on-option-avg-aggregate.input';
import { DetailOnOptionSumAggregateInput } from './detail-on-option-sum-aggregate.input';
import { DetailOnOptionMinAggregateInput } from './detail-on-option-min-aggregate.input';
import { DetailOnOptionMaxAggregateInput } from './detail-on-option-max-aggregate.input';

@ArgsType()
export class DetailOnOptionGroupByArgs {

    @Field(() => DetailOnOptionWhereInput, {nullable:true})
    where?: DetailOnOptionWhereInput;

    @Field(() => [DetailOnOptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DetailOnOptionOrderByWithAggregationInput>;

    @Field(() => [DetailOnOptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DetailOnOptionScalarFieldEnum>;

    @Field(() => DetailOnOptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: DetailOnOptionScalarWhereWithAggregatesInput;

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

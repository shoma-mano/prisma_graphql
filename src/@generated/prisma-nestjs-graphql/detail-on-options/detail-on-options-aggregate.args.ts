import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsWhereInput } from './detail-on-options-where.input';
import { DetailOnOptionsOrderByWithRelationInput } from './detail-on-options-order-by-with-relation.input';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionsCountAggregateInput } from './detail-on-options-count-aggregate.input';
import { DetailOnOptionsAvgAggregateInput } from './detail-on-options-avg-aggregate.input';
import { DetailOnOptionsSumAggregateInput } from './detail-on-options-sum-aggregate.input';
import { DetailOnOptionsMinAggregateInput } from './detail-on-options-min-aggregate.input';
import { DetailOnOptionsMaxAggregateInput } from './detail-on-options-max-aggregate.input';

@ArgsType()
export class DetailOnOptionsAggregateArgs {

    @Field(() => DetailOnOptionsWhereInput, {nullable:true})
    where?: DetailOnOptionsWhereInput;

    @Field(() => [DetailOnOptionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DetailOnOptionsOrderByWithRelationInput>;

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:true})
    cursor?: DetailOnOptionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DetailOnOptionsCountAggregateInput, {nullable:true})
    _count?: DetailOnOptionsCountAggregateInput;

    @Field(() => DetailOnOptionsAvgAggregateInput, {nullable:true})
    _avg?: DetailOnOptionsAvgAggregateInput;

    @Field(() => DetailOnOptionsSumAggregateInput, {nullable:true})
    _sum?: DetailOnOptionsSumAggregateInput;

    @Field(() => DetailOnOptionsMinAggregateInput, {nullable:true})
    _min?: DetailOnOptionsMinAggregateInput;

    @Field(() => DetailOnOptionsMaxAggregateInput, {nullable:true})
    _max?: DetailOnOptionsMaxAggregateInput;
}

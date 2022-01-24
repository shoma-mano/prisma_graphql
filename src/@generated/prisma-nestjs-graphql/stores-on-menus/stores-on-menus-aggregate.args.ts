import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusWhereInput } from './stores-on-menus-where.input';
import { StoresOnMenusOrderByWithRelationInput } from './stores-on-menus-order-by-with-relation.input';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoresOnMenusCountAggregateInput } from './stores-on-menus-count-aggregate.input';
import { StoresOnMenusAvgAggregateInput } from './stores-on-menus-avg-aggregate.input';
import { StoresOnMenusSumAggregateInput } from './stores-on-menus-sum-aggregate.input';
import { StoresOnMenusMinAggregateInput } from './stores-on-menus-min-aggregate.input';
import { StoresOnMenusMaxAggregateInput } from './stores-on-menus-max-aggregate.input';

@ArgsType()
export class StoresOnMenusAggregateArgs {

    @Field(() => StoresOnMenusWhereInput, {nullable:true})
    where?: StoresOnMenusWhereInput;

    @Field(() => [StoresOnMenusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoresOnMenusOrderByWithRelationInput>;

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:true})
    cursor?: StoresOnMenusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StoresOnMenusCountAggregateInput, {nullable:true})
    _count?: StoresOnMenusCountAggregateInput;

    @Field(() => StoresOnMenusAvgAggregateInput, {nullable:true})
    _avg?: StoresOnMenusAvgAggregateInput;

    @Field(() => StoresOnMenusSumAggregateInput, {nullable:true})
    _sum?: StoresOnMenusSumAggregateInput;

    @Field(() => StoresOnMenusMinAggregateInput, {nullable:true})
    _min?: StoresOnMenusMinAggregateInput;

    @Field(() => StoresOnMenusMaxAggregateInput, {nullable:true})
    _max?: StoresOnMenusMaxAggregateInput;
}

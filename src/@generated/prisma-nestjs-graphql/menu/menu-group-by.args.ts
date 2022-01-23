import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuWhereInput } from './menu-where.input';
import { MenuOrderByWithAggregationInput } from './menu-order-by-with-aggregation.input';
import { MenuScalarFieldEnum } from './menu-scalar-field.enum';
import { MenuScalarWhereWithAggregatesInput } from './menu-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MenuCountAggregateInput } from './menu-count-aggregate.input';
import { MenuAvgAggregateInput } from './menu-avg-aggregate.input';
import { MenuSumAggregateInput } from './menu-sum-aggregate.input';
import { MenuMinAggregateInput } from './menu-min-aggregate.input';
import { MenuMaxAggregateInput } from './menu-max-aggregate.input';

@ArgsType()
export class MenuGroupByArgs {

    @Field(() => MenuWhereInput, {nullable:true})
    where?: MenuWhereInput;

    @Field(() => [MenuOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MenuOrderByWithAggregationInput>;

    @Field(() => [MenuScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MenuScalarFieldEnum>;

    @Field(() => MenuScalarWhereWithAggregatesInput, {nullable:true})
    having?: MenuScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MenuCountAggregateInput, {nullable:true})
    _count?: MenuCountAggregateInput;

    @Field(() => MenuAvgAggregateInput, {nullable:true})
    _avg?: MenuAvgAggregateInput;

    @Field(() => MenuSumAggregateInput, {nullable:true})
    _sum?: MenuSumAggregateInput;

    @Field(() => MenuMinAggregateInput, {nullable:true})
    _min?: MenuMinAggregateInput;

    @Field(() => MenuMaxAggregateInput, {nullable:true})
    _max?: MenuMaxAggregateInput;
}

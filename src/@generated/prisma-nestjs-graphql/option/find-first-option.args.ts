import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';
import { OptionOrderByWithRelationInput } from './option-order-by-with-relation.input';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OptionScalarFieldEnum } from './option-scalar-field.enum';

@ArgsType()
export class FindFirstOptionArgs {

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

    @Field(() => [OptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OptionScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoreWhereInput } from './store-where.input';
import { StoreOrderByWithRelationInput } from './store-order-by-with-relation.input';
import { StoreWhereUniqueInput } from './store-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoreScalarFieldEnum } from './store-scalar-field.enum';

@ArgsType()
export class FindFirstStoreArgs {

    @Field(() => StoreWhereInput, {nullable:true})
    where?: StoreWhereInput;

    @Field(() => [StoreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoreOrderByWithRelationInput>;

    @Field(() => StoreWhereUniqueInput, {nullable:true})
    cursor?: StoreWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StoreScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StoreScalarFieldEnum>;
}

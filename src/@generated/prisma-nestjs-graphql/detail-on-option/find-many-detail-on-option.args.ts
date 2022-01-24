import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionWhereInput } from './detail-on-option-where.input';
import { DetailOnOptionOrderByWithRelationInput } from './detail-on-option-order-by-with-relation.input';
import { DetailOnOptionWhereUniqueInput } from './detail-on-option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionScalarFieldEnum } from './detail-on-option-scalar-field.enum';

@ArgsType()
export class FindManyDetailOnOptionArgs {

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

    @Field(() => [DetailOnOptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DetailOnOptionScalarFieldEnum>;
}

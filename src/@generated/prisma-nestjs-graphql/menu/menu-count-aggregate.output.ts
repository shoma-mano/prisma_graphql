import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MenuCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    img!: number;

    @Field(() => Int, {nullable:false})
    detailId!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

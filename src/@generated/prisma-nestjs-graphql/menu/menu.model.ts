import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Detail } from '../detail/detail.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Menu {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Detail, {nullable:true})
    detail?: Detail | null;

    /** 商品詳細ページ */
    @Field(() => Int, {nullable:true,description:'商品詳細ページ'})
    detailId!: number | null;

    @Field(() => String, {nullable:false})
    category!: string;
}

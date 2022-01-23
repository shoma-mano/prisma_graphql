import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Menu } from '../menu/menu.model';
import { DetailOnOptions } from '../detail-on-options/detail-on-options.model';
import { DetailCount } from './detail-count.output';

/** 商品詳細ページ */
@ObjectType({description:'商品詳細ページ'})
export class Detail {

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

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    sentence!: string;

    @Field(() => Menu, {nullable:true})
    menu?: Menu | null;

    @Field(() => [DetailOnOptions], {nullable:true})
    options?: Array<DetailOnOptions>;

    @Field(() => DetailCount, {nullable:false})
    _count?: DetailCount;
}

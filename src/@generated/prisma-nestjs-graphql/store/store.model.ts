import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StoresOnMenus } from '../stores-on-menus/stores-on-menus.model';
import { StoreCount } from './store-count.output';

@ObjectType()
export class Store {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:false})
    longitude!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    img!: string | null;

    @Field(() => [StoresOnMenus], {nullable:true})
    menus?: Array<StoresOnMenus>;

    @Field(() => StoreCount, {nullable:false})
    _count?: StoreCount;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StoreCount {

    @Field(() => Int, {nullable:false})
    menus!: number;
}

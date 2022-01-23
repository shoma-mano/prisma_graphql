import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OptionCount {

    @Field(() => Int, {nullable:false})
    details!: number;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DetailOnOptionsCreateManyDetailInput {

    @Field(() => Int, {nullable:false})
    optionId!: number;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}

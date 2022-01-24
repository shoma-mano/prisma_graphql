import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DetailOnOptionUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    optionId?: number;

    @Field(() => Int, {nullable:true})
    detailId?: number;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:true})
    assignedBy?: string;
}

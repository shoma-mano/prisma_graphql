import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DetailOnOptionUncheckedUpdateWithoutOptionInput {

    @Field(() => Int, {nullable:true})
    detailId?: number;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:true})
    assignedBy?: string;
}

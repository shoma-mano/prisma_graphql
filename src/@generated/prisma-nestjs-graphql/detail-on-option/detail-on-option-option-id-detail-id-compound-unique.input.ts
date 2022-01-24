import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DetailOnOptionOptionIdDetailIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    optionId!: number;

    @Field(() => Int, {nullable:false})
    detailId!: number;
}

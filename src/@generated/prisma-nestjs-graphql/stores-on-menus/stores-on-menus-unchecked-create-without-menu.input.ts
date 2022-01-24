import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusUncheckedCreateWithoutMenuInput {

    @Field(() => Int, {nullable:false})
    storeId!: number;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;
}

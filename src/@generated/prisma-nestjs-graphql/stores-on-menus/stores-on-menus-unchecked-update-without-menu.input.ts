import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusUncheckedUpdateWithoutMenuInput {

    @Field(() => Int, {nullable:true})
    storeId?: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;
}

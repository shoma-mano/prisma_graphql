import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    storeId?: number;

    @Field(() => Int, {nullable:true})
    menuId?: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusUncheckedUpdateManyWithoutMenusInput {

    @Field(() => Int, {nullable:true})
    menuId?: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;
}

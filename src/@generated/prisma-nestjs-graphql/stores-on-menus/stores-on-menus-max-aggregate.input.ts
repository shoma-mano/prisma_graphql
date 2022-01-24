import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    storeId?: true;

    @Field(() => Boolean, {nullable:true})
    menuId?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;
}

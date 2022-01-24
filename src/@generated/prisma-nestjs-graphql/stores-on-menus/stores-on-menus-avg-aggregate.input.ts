import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    storeId?: true;

    @Field(() => Boolean, {nullable:true})
    menuId?: true;
}

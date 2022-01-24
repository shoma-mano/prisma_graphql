import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    storeId?: true;

    @Field(() => Boolean, {nullable:true})
    menuId?: true;
}

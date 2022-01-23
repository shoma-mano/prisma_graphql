import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DetailOnOptionsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    optionId?: true;

    @Field(() => Boolean, {nullable:true})
    detailId?: true;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DetailOnOptionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    optionId?: true;

    @Field(() => Boolean, {nullable:true})
    detailId?: true;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DetailOnOptionsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    optionId?: true;

    @Field(() => Boolean, {nullable:true})
    detailId?: true;

    @Field(() => Boolean, {nullable:true})
    assignedAt?: true;

    @Field(() => Boolean, {nullable:true})
    assignedBy?: true;
}

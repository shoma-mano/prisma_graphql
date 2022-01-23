import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DetailOnOptionsUpdateManyMutationInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:true})
    assignedBy?: string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StoresOnMenusUpdateManyMutationInput {

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;
}

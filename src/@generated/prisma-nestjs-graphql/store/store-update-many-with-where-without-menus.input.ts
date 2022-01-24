import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreScalarWhereInput } from './store-scalar-where.input';
import { StoreUpdateManyMutationInput } from './store-update-many-mutation.input';

@InputType()
export class StoreUpdateManyWithWhereWithoutMenusInput {

    @Field(() => StoreScalarWhereInput, {nullable:false})
    where!: StoreScalarWhereInput;

    @Field(() => StoreUpdateManyMutationInput, {nullable:false})
    data!: StoreUpdateManyMutationInput;
}

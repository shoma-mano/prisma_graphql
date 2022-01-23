import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsScalarWhereInput } from './detail-on-options-scalar-where.input';
import { DetailOnOptionsUpdateManyMutationInput } from './detail-on-options-update-many-mutation.input';

@InputType()
export class DetailOnOptionsUpdateManyWithWhereWithoutOptionInput {

    @Field(() => DetailOnOptionsScalarWhereInput, {nullable:false})
    where!: DetailOnOptionsScalarWhereInput;

    @Field(() => DetailOnOptionsUpdateManyMutationInput, {nullable:false})
    data!: DetailOnOptionsUpdateManyMutationInput;
}

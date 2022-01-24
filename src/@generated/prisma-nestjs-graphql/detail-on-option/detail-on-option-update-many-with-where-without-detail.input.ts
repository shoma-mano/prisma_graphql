import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionScalarWhereInput } from './detail-on-option-scalar-where.input';
import { DetailOnOptionUpdateManyMutationInput } from './detail-on-option-update-many-mutation.input';

@InputType()
export class DetailOnOptionUpdateManyWithWhereWithoutDetailInput {

    @Field(() => DetailOnOptionScalarWhereInput, {nullable:false})
    where!: DetailOnOptionScalarWhereInput;

    @Field(() => DetailOnOptionUpdateManyMutationInput, {nullable:false})
    data!: DetailOnOptionUpdateManyMutationInput;
}

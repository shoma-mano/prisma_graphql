import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateNestedOneWithoutOptionsInput } from '../detail/detail-create-nested-one-without-options.input';

@InputType()
export class DetailOnOptionCreateWithoutOptionInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => DetailCreateNestedOneWithoutOptionsInput, {nullable:false})
    detail!: DetailCreateNestedOneWithoutOptionsInput;
}

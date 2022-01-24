import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionCreateNestedManyWithoutOptionInput } from '../detail-on-option/detail-on-option-create-nested-many-without-option.input';

@InputType()
export class OptionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DetailOnOptionCreateNestedManyWithoutOptionInput, {nullable:true})
    details?: DetailOnOptionCreateNestedManyWithoutOptionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsCreateNestedManyWithoutOptionInput } from '../detail-on-options/detail-on-options-create-nested-many-without-option.input';

@InputType()
export class OptionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DetailOnOptionsCreateNestedManyWithoutOptionInput, {nullable:true})
    details?: DetailOnOptionsCreateNestedManyWithoutOptionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsUpdateManyWithoutOptionInput } from '../detail-on-options/detail-on-options-update-many-without-option.input';

@InputType()
export class OptionUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => DetailOnOptionsUpdateManyWithoutOptionInput, {nullable:true})
    details?: DetailOnOptionsUpdateManyWithoutOptionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionUpdateWithoutDetailsInput } from './option-update-without-details.input';
import { OptionCreateWithoutDetailsInput } from './option-create-without-details.input';

@InputType()
export class OptionUpsertWithoutDetailsInput {

    @Field(() => OptionUpdateWithoutDetailsInput, {nullable:false})
    update!: OptionUpdateWithoutDetailsInput;

    @Field(() => OptionCreateWithoutDetailsInput, {nullable:false})
    create!: OptionCreateWithoutDetailsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateWithoutDetailsInput } from './option-create-without-details.input';
import { OptionCreateOrConnectWithoutDetailsInput } from './option-create-or-connect-without-details.input';
import { OptionUpsertWithoutDetailsInput } from './option-upsert-without-details.input';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { OptionUpdateWithoutDetailsInput } from './option-update-without-details.input';

@InputType()
export class OptionUpdateOneRequiredWithoutDetailsInput {

    @Field(() => OptionCreateWithoutDetailsInput, {nullable:true})
    create?: OptionCreateWithoutDetailsInput;

    @Field(() => OptionCreateOrConnectWithoutDetailsInput, {nullable:true})
    connectOrCreate?: OptionCreateOrConnectWithoutDetailsInput;

    @Field(() => OptionUpsertWithoutDetailsInput, {nullable:true})
    upsert?: OptionUpsertWithoutDetailsInput;

    @Field(() => OptionWhereUniqueInput, {nullable:true})
    connect?: OptionWhereUniqueInput;

    @Field(() => OptionUpdateWithoutDetailsInput, {nullable:true})
    update?: OptionUpdateWithoutDetailsInput;
}

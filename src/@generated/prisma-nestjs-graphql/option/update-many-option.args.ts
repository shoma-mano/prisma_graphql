import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionUpdateManyMutationInput } from './option-update-many-mutation.input';
import { OptionWhereInput } from './option-where.input';

@ArgsType()
export class UpdateManyOptionArgs {

    @Field(() => OptionUpdateManyMutationInput, {nullable:false})
    data!: OptionUpdateManyMutationInput;

    @Field(() => OptionWhereInput, {nullable:true})
    where?: OptionWhereInput;
}

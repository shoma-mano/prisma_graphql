import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';

@ArgsType()
export class DeleteManyOptionArgs {

    @Field(() => OptionWhereInput, {nullable:true})
    where?: OptionWhereInput;
}

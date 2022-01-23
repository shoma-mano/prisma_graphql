import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionCreateManyInput } from './option-create-many.input';

@ArgsType()
export class CreateManyOptionArgs {

    @Field(() => [OptionCreateManyInput], {nullable:false})
    data!: Array<OptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

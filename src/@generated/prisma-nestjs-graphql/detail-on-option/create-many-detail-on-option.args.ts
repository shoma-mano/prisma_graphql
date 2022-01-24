import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionCreateManyInput } from './detail-on-option-create-many.input';

@ArgsType()
export class CreateManyDetailOnOptionArgs {

    @Field(() => [DetailOnOptionCreateManyInput], {nullable:false})
    data!: Array<DetailOnOptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

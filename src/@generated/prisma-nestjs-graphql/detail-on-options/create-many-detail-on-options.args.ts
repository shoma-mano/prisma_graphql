import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsCreateManyInput } from './detail-on-options-create-many.input';

@ArgsType()
export class CreateManyDetailOnOptionsArgs {

    @Field(() => [DetailOnOptionsCreateManyInput], {nullable:false})
    data!: Array<DetailOnOptionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

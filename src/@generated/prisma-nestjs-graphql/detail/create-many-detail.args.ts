import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailCreateManyInput } from './detail-create-many.input';

@ArgsType()
export class CreateManyDetailArgs {

    @Field(() => [DetailCreateManyInput], {nullable:false})
    data!: Array<DetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

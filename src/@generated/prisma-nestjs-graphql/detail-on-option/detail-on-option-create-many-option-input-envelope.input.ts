import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionCreateManyOptionInput } from './detail-on-option-create-many-option.input';

@InputType()
export class DetailOnOptionCreateManyOptionInputEnvelope {

    @Field(() => [DetailOnOptionCreateManyOptionInput], {nullable:false})
    data!: Array<DetailOnOptionCreateManyOptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

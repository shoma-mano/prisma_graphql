import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsCreateManyOptionInput } from './detail-on-options-create-many-option.input';

@InputType()
export class DetailOnOptionsCreateManyOptionInputEnvelope {

    @Field(() => [DetailOnOptionsCreateManyOptionInput], {nullable:false})
    data!: Array<DetailOnOptionsCreateManyOptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

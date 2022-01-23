import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsCreateManyDetailInput } from './detail-on-options-create-many-detail.input';

@InputType()
export class DetailOnOptionsCreateManyDetailInputEnvelope {

    @Field(() => [DetailOnOptionsCreateManyDetailInput], {nullable:false})
    data!: Array<DetailOnOptionsCreateManyDetailInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

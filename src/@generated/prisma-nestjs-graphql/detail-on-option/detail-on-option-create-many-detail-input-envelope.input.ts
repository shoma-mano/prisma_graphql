import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionCreateManyDetailInput } from './detail-on-option-create-many-detail.input';

@InputType()
export class DetailOnOptionCreateManyDetailInputEnvelope {

    @Field(() => [DetailOnOptionCreateManyDetailInput], {nullable:false})
    data!: Array<DetailOnOptionCreateManyDetailInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

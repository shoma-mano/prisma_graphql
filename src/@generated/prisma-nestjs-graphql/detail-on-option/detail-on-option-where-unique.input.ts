import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionOptionIdDetailIdCompoundUniqueInput } from './detail-on-option-option-id-detail-id-compound-unique.input';

@InputType()
export class DetailOnOptionWhereUniqueInput {

    @Field(() => DetailOnOptionOptionIdDetailIdCompoundUniqueInput, {nullable:true})
    optionId_detailId?: DetailOnOptionOptionIdDetailIdCompoundUniqueInput;
}

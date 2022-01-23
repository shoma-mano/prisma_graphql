import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailOnOptionsOptionIdDetailIdCompoundUniqueInput } from './detail-on-options-option-id-detail-id-compound-unique.input';

@InputType()
export class DetailOnOptionsWhereUniqueInput {

    @Field(() => DetailOnOptionsOptionIdDetailIdCompoundUniqueInput, {nullable:true})
    optionId_detailId?: DetailOnOptionsOptionIdDetailIdCompoundUniqueInput;
}

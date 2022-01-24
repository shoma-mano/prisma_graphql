import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUpdateOneWithoutItemInput } from '../detail/detail-update-one-without-item.input';

@InputType()
export class ItemUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => DetailUpdateOneWithoutItemInput, {nullable:true})
    detail?: DetailUpdateOneWithoutItemInput;
}

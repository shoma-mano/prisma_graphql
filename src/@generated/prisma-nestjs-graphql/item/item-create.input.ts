import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateNestedOneWithoutItemInput } from '../detail/detail-create-nested-one-without-item.input';

@InputType()
export class ItemCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => DetailCreateNestedOneWithoutItemInput, {nullable:true})
    detail?: DetailCreateNestedOneWithoutItemInput;
}

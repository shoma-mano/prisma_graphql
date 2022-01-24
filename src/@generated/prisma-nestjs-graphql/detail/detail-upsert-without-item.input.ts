import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUpdateWithoutItemInput } from './detail-update-without-item.input';
import { DetailCreateWithoutItemInput } from './detail-create-without-item.input';

@InputType()
export class DetailUpsertWithoutItemInput {

    @Field(() => DetailUpdateWithoutItemInput, {nullable:false})
    update!: DetailUpdateWithoutItemInput;

    @Field(() => DetailCreateWithoutItemInput, {nullable:false})
    create!: DetailCreateWithoutItemInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUpdateWithoutMenuInput } from './detail-update-without-menu.input';
import { DetailCreateWithoutMenuInput } from './detail-create-without-menu.input';

@InputType()
export class DetailUpsertWithoutMenuInput {

    @Field(() => DetailUpdateWithoutMenuInput, {nullable:false})
    update!: DetailUpdateWithoutMenuInput;

    @Field(() => DetailCreateWithoutMenuInput, {nullable:false})
    create!: DetailCreateWithoutMenuInput;
}

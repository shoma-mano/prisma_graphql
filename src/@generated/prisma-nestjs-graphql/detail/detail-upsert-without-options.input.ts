import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUpdateWithoutOptionsInput } from './detail-update-without-options.input';
import { DetailCreateWithoutOptionsInput } from './detail-create-without-options.input';

@InputType()
export class DetailUpsertWithoutOptionsInput {

    @Field(() => DetailUpdateWithoutOptionsInput, {nullable:false})
    update!: DetailUpdateWithoutOptionsInput;

    @Field(() => DetailCreateWithoutOptionsInput, {nullable:false})
    create!: DetailCreateWithoutOptionsInput;
}

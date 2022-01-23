import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailCreateWithoutOptionsInput } from './detail-create-without-options.input';

@InputType()
export class DetailCreateOrConnectWithoutOptionsInput {

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    where!: DetailWhereUniqueInput;

    @Field(() => DetailCreateWithoutOptionsInput, {nullable:false})
    create!: DetailCreateWithoutOptionsInput;
}

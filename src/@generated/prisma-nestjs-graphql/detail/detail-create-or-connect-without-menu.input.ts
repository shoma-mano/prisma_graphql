import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailCreateWithoutMenuInput } from './detail-create-without-menu.input';

@InputType()
export class DetailCreateOrConnectWithoutMenuInput {

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    where!: DetailWhereUniqueInput;

    @Field(() => DetailCreateWithoutMenuInput, {nullable:false})
    create!: DetailCreateWithoutMenuInput;
}

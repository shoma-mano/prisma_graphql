import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailCreateWithoutItemInput } from './detail-create-without-item.input';

@InputType()
export class DetailCreateOrConnectWithoutItemInput {

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    where!: DetailWhereUniqueInput;

    @Field(() => DetailCreateWithoutItemInput, {nullable:false})
    create!: DetailCreateWithoutItemInput;
}

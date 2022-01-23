import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutOptionsInput } from './detail-create-without-options.input';
import { DetailCreateOrConnectWithoutOptionsInput } from './detail-create-or-connect-without-options.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@InputType()
export class DetailCreateNestedOneWithoutOptionsInput {

    @Field(() => DetailCreateWithoutOptionsInput, {nullable:true})
    create?: DetailCreateWithoutOptionsInput;

    @Field(() => DetailCreateOrConnectWithoutOptionsInput, {nullable:true})
    connectOrCreate?: DetailCreateOrConnectWithoutOptionsInput;

    @Field(() => DetailWhereUniqueInput, {nullable:true})
    connect?: DetailWhereUniqueInput;
}

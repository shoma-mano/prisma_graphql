import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutMenuInput } from './detail-create-without-menu.input';
import { DetailCreateOrConnectWithoutMenuInput } from './detail-create-or-connect-without-menu.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@InputType()
export class DetailCreateNestedOneWithoutMenuInput {

    @Field(() => DetailCreateWithoutMenuInput, {nullable:true})
    create?: DetailCreateWithoutMenuInput;

    @Field(() => DetailCreateOrConnectWithoutMenuInput, {nullable:true})
    connectOrCreate?: DetailCreateOrConnectWithoutMenuInput;

    @Field(() => DetailWhereUniqueInput, {nullable:true})
    connect?: DetailWhereUniqueInput;
}

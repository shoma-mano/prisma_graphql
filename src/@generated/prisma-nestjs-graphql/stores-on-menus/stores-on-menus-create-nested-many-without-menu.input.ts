import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusCreateWithoutMenuInput } from './stores-on-menus-create-without-menu.input';
import { StoresOnMenusCreateOrConnectWithoutMenuInput } from './stores-on-menus-create-or-connect-without-menu.input';
import { StoresOnMenusCreateManyMenuInputEnvelope } from './stores-on-menus-create-many-menu-input-envelope.input';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';

@InputType()
export class StoresOnMenusCreateNestedManyWithoutMenuInput {

    @Field(() => [StoresOnMenusCreateWithoutMenuInput], {nullable:true})
    create?: Array<StoresOnMenusCreateWithoutMenuInput>;

    @Field(() => [StoresOnMenusCreateOrConnectWithoutMenuInput], {nullable:true})
    connectOrCreate?: Array<StoresOnMenusCreateOrConnectWithoutMenuInput>;

    @Field(() => StoresOnMenusCreateManyMenuInputEnvelope, {nullable:true})
    createMany?: StoresOnMenusCreateManyMenuInputEnvelope;

    @Field(() => [StoresOnMenusWhereUniqueInput], {nullable:true})
    connect?: Array<StoresOnMenusWhereUniqueInput>;
}

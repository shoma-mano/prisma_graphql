import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreCreateWithoutMenusInput } from './store-create-without-menus.input';
import { StoreCreateOrConnectWithoutMenusInput } from './store-create-or-connect-without-menus.input';
import { StoreWhereUniqueInput } from './store-where-unique.input';

@InputType()
export class StoreCreateNestedManyWithoutMenusInput {

    @Field(() => [StoreCreateWithoutMenusInput], {nullable:true})
    create?: Array<StoreCreateWithoutMenusInput>;

    @Field(() => [StoreCreateOrConnectWithoutMenusInput], {nullable:true})
    connectOrCreate?: Array<StoreCreateOrConnectWithoutMenusInput>;

    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    connect?: Array<StoreWhereUniqueInput>;
}

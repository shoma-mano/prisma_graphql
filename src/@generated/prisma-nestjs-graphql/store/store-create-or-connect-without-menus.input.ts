import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreWhereUniqueInput } from './store-where-unique.input';
import { StoreCreateWithoutMenusInput } from './store-create-without-menus.input';

@InputType()
export class StoreCreateOrConnectWithoutMenusInput {

    @Field(() => StoreWhereUniqueInput, {nullable:false})
    where!: StoreWhereUniqueInput;

    @Field(() => StoreCreateWithoutMenusInput, {nullable:false})
    create!: StoreCreateWithoutMenusInput;
}

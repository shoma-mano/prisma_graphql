import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoreWhereUniqueInput } from './store-where-unique.input';
import { StoreUpdateWithoutMenusInput } from './store-update-without-menus.input';

@InputType()
export class StoreUpdateWithWhereUniqueWithoutMenusInput {

    @Field(() => StoreWhereUniqueInput, {nullable:false})
    where!: StoreWhereUniqueInput;

    @Field(() => StoreUpdateWithoutMenusInput, {nullable:false})
    data!: StoreUpdateWithoutMenusInput;
}

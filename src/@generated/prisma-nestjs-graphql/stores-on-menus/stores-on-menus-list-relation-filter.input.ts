import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusWhereInput } from './stores-on-menus-where.input';

@InputType()
export class StoresOnMenusListRelationFilter {

    @Field(() => StoresOnMenusWhereInput, {nullable:true})
    every?: StoresOnMenusWhereInput;

    @Field(() => StoresOnMenusWhereInput, {nullable:true})
    some?: StoresOnMenusWhereInput;

    @Field(() => StoresOnMenusWhereInput, {nullable:true})
    none?: StoresOnMenusWhereInput;
}

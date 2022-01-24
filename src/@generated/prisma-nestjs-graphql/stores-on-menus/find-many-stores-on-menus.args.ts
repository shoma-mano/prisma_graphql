import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoresOnMenusWhereInput } from './stores-on-menus-where.input';
import { StoresOnMenusOrderByWithRelationInput } from './stores-on-menus-order-by-with-relation.input';
import { StoresOnMenusWhereUniqueInput } from './stores-on-menus-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoresOnMenusScalarFieldEnum } from './stores-on-menus-scalar-field.enum';

@ArgsType()
export class FindManyStoresOnMenusArgs {

    @Field(() => StoresOnMenusWhereInput, {nullable:true})
    where?: StoresOnMenusWhereInput;

    @Field(() => [StoresOnMenusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoresOnMenusOrderByWithRelationInput>;

    @Field(() => StoresOnMenusWhereUniqueInput, {nullable:true})
    cursor?: StoresOnMenusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StoresOnMenusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StoresOnMenusScalarFieldEnum>;
}

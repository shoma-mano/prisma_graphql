import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuWhereInput } from './menu-where.input';
import { MenuOrderByWithRelationInput } from './menu-order-by-with-relation.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MenuScalarFieldEnum } from './menu-scalar-field.enum';

@ArgsType()
export class FindFirstMenuArgs {

    @Field(() => MenuWhereInput, {nullable:true})
    where?: MenuWhereInput;

    @Field(() => [MenuOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MenuOrderByWithRelationInput>;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    cursor?: MenuWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MenuScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MenuScalarFieldEnum>;
}

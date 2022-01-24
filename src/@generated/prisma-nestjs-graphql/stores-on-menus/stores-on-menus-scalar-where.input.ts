import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class StoresOnMenusScalarWhereInput {

    @Field(() => [StoresOnMenusScalarWhereInput], {nullable:true})
    AND?: Array<StoresOnMenusScalarWhereInput>;

    @Field(() => [StoresOnMenusScalarWhereInput], {nullable:true})
    OR?: Array<StoresOnMenusScalarWhereInput>;

    @Field(() => [StoresOnMenusScalarWhereInput], {nullable:true})
    NOT?: Array<StoresOnMenusScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    storeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    menuId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusStoreIdMenuIdCompoundUniqueInput } from './stores-on-menus-store-id-menu-id-compound-unique.input';

@InputType()
export class StoresOnMenusWhereUniqueInput {

    @Field(() => StoresOnMenusStoreIdMenuIdCompoundUniqueInput, {nullable:true})
    storeId_menuId?: StoresOnMenusStoreIdMenuIdCompoundUniqueInput;
}

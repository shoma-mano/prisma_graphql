import { registerEnumType } from '@nestjs/graphql';

export enum StoresOnMenusScalarFieldEnum {
    storeId = "storeId",
    menuId = "menuId",
    isActive = "isActive"
}


registerEnumType(StoresOnMenusScalarFieldEnum, { name: 'StoresOnMenusScalarFieldEnum', description: undefined })

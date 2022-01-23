import { registerEnumType } from '@nestjs/graphql';

export enum MenuScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    img = "img",
    detailId = "detailId",
    category = "category"
}


registerEnumType(MenuScalarFieldEnum, { name: 'MenuScalarFieldEnum', description: undefined })

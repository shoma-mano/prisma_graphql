import { registerEnumType } from '@nestjs/graphql';

export enum ItemScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    img = "img",
    detailId = "detailId",
    category = "category"
}


registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum', description: undefined })

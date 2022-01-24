import { registerEnumType } from '@nestjs/graphql';

export enum StoreScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    latitude = "latitude",
    longitude = "longitude",
    name = "name",
    img = "img"
}


registerEnumType(StoreScalarFieldEnum, { name: 'StoreScalarFieldEnum', description: undefined })

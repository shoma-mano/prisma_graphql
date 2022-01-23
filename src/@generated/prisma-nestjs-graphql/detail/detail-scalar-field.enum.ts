import { registerEnumType } from '@nestjs/graphql';

export enum DetailScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    img = "img",
    price = "price",
    sentence = "sentence"
}


registerEnumType(DetailScalarFieldEnum, { name: 'DetailScalarFieldEnum', description: undefined })

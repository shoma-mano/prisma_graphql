import { registerEnumType } from '@nestjs/graphql';

export enum OptionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name"
}


registerEnumType(OptionScalarFieldEnum, { name: 'OptionScalarFieldEnum', description: undefined })

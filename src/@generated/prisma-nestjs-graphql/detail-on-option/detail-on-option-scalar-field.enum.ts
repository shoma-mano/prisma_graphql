import { registerEnumType } from '@nestjs/graphql';

export enum DetailOnOptionScalarFieldEnum {
    optionId = "optionId",
    detailId = "detailId",
    assignedAt = "assignedAt",
    assignedBy = "assignedBy"
}


registerEnumType(DetailOnOptionScalarFieldEnum, { name: 'DetailOnOptionScalarFieldEnum', description: undefined })

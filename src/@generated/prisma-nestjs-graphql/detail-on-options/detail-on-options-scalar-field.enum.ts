import { registerEnumType } from '@nestjs/graphql';

export enum DetailOnOptionsScalarFieldEnum {
    optionId = "optionId",
    detailId = "detailId",
    assignedAt = "assignedAt",
    assignedBy = "assignedBy"
}


registerEnumType(DetailOnOptionsScalarFieldEnum, { name: 'DetailOnOptionsScalarFieldEnum', description: undefined })

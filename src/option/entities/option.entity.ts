import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Detail } from '../../details/entities/detail.entity';

@ObjectType()
export class Option extends BaseModel {
  name: string;
  details?: Detail[];
}

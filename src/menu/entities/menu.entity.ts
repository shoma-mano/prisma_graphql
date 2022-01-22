import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Detail } from '../../details/entities/detail.entity';

@ObjectType()
export class Menu extends BaseModel {
  name: string;
  img: string;
  detail?: Detail;
  detailId: number;
  category: string;
}

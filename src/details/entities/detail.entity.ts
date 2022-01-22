import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Menu } from '../../menu/entities/menu.entity';

@ObjectType()
export class Detail extends BaseModel {
  name: string;
  img: string;
  price: number;
  sentence: string;
  menu?: Menu;
}

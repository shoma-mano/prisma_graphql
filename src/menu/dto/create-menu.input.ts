import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { Detail } from '../../details/entities/detail.entity';
import { Menu } from '../entities/menu.entity';

@InputType()
export class CreateMenuInput {
  name: string;
  img: string;
  category: string;
}

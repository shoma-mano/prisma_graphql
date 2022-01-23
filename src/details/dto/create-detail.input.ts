import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { Menu } from '../../menu/entities/menu.entity';

@InputType()
export class CreateDetailInput {
  name: string;
  img: string;
  price: number;
  sentence: string;
}

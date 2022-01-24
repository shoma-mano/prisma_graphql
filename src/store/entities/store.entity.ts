import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {Menu} from "../../menu/entities/menu.entity";

@ObjectType()
export class Store {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Int, { nullable: false })
  latitude!: number;

  @Field(() => Int, { nullable: false })
  longitude!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  img!: string | null;

  @Field(() => [Menu], { nullable: true })
  menus?: Array<Menu>;
}

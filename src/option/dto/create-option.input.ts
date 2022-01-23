import { InputType, Int, Field } from '@nestjs/graphql';
import { Detail } from '../../details/entities/detail.entity';
import { CreateDetailInput } from '../../details/dto/create-detail.input';

@InputType()
export class CreateOptionInput {
  name: string;
  @Field((type) => [CreateDetailInput])
  details?: CreateDetailInput[];
}

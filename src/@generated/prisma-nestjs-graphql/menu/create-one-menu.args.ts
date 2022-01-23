import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuCreateInput } from './menu-create.input';

@ArgsType()
export class CreateOneMenuArgs {

    @Field(() => MenuCreateInput, {nullable:false})
    data!: MenuCreateInput;
}

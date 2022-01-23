import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuWhereInput } from './menu-where.input';

@ArgsType()
export class DeleteManyMenuArgs {

    @Field(() => MenuWhereInput, {nullable:true})
    where?: MenuWhereInput;
}

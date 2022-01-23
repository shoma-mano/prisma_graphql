import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuCreateManyInput } from './menu-create-many.input';

@ArgsType()
export class CreateManyMenuArgs {

    @Field(() => [MenuCreateManyInput], {nullable:false})
    data!: Array<MenuCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

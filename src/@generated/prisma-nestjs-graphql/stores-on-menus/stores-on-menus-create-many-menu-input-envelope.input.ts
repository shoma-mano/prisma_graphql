import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoresOnMenusCreateManyMenuInput } from './stores-on-menus-create-many-menu.input';

@InputType()
export class StoresOnMenusCreateManyMenuInputEnvelope {

    @Field(() => [StoresOnMenusCreateManyMenuInput], {nullable:false})
    data!: Array<StoresOnMenusCreateManyMenuInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

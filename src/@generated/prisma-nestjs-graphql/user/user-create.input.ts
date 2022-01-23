import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;
}

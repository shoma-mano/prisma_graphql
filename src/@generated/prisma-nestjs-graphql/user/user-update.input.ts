import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';

@InputType()
export class UserUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => PostUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorInput;
}

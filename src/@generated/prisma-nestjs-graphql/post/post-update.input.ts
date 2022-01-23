import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutPostsInput } from '../user/user-update-one-without-posts.input';

@InputType()
export class PostUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => UserUpdateOneWithoutPostsInput, {nullable:true})
    author?: UserUpdateOneWithoutPostsInput;
}

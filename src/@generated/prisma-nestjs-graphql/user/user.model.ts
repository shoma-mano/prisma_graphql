import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Role } from '../prisma/role.enum';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstname!: string | null;

    /** 苗字 */
    @Field(() => String, {nullable:true,description:'苗字'})
    lastname!: string | null;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

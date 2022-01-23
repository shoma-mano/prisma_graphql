import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DetailOnOptions } from '../detail-on-options/detail-on-options.model';
import { OptionCount } from './option-count.output';

@ObjectType()
export class Option {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [DetailOnOptions], {nullable:true})
    details?: Array<DetailOnOptions>;

    @Field(() => OptionCount, {nullable:false})
    _count?: OptionCount;
}

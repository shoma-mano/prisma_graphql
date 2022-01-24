import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DetailOnOption } from '../detail-on-option/detail-on-option.model';
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

    @Field(() => [DetailOnOption], {nullable:true})
    details?: Array<DetailOnOption>;

    @Field(() => OptionCount, {nullable:false})
    _count?: OptionCount;
}

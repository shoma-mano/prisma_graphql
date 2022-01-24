import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Option } from '../option/option.model';
import { Int } from '@nestjs/graphql';
import { Detail } from '../detail/detail.model';

@ObjectType()
export class DetailOnOption {

    @Field(() => Option, {nullable:false})
    option?: Option;

    @Field(() => Int, {nullable:false})
    optionId!: number;

    @Field(() => Detail, {nullable:false})
    detail?: Detail;

    @Field(() => Int, {nullable:false})
    detailId!: number;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}

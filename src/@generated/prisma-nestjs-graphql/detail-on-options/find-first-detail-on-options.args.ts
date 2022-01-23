import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailOnOptionsWhereInput } from './detail-on-options-where.input';
import { DetailOnOptionsOrderByWithRelationInput } from './detail-on-options-order-by-with-relation.input';
import { DetailOnOptionsWhereUniqueInput } from './detail-on-options-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DetailOnOptionsScalarFieldEnum } from './detail-on-options-scalar-field.enum';

@ArgsType()
export class FindFirstDetailOnOptionsArgs {

    @Field(() => DetailOnOptionsWhereInput, {nullable:true})
    where?: DetailOnOptionsWhereInput;

    @Field(() => [DetailOnOptionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DetailOnOptionsOrderByWithRelationInput>;

    @Field(() => DetailOnOptionsWhereUniqueInput, {nullable:true})
    cursor?: DetailOnOptionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DetailOnOptionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DetailOnOptionsScalarFieldEnum>;
}

import { Injectable } from '@nestjs/common';
import { CreateDetailInput } from './dto/create-detail.input';
import { UpdateDetailInput } from './dto/update-detail.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DetailsService {
  constructor(private prisma: PrismaService) {}
  create(createDetailInput: CreateDetailInput) {
    return this.prisma.detail.create({
      data: {
        ...createDetailInput,
      },
    });
  }

  async findAll() {
    return await this.prisma.detail.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.detail.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateDetailInput: UpdateDetailInput) {
    return `This action updates a #${id} detail`;
  }

  remove(id: number) {
    return `This action removes a #${id} detail`;
  }
}

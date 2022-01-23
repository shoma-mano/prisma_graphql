import { Injectable } from '@nestjs/common';
import { CreateOptionInput } from './dto/create-option.input';
import { UpdateOptionInput } from './dto/update-option.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OptionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOptionInput: CreateOptionInput) {
    return await this.prisma.option.create({
      data: {
        ...createOptionInput,
        details: {
          create: createOptionInput.details.map((v) => ({
            detail: { create: v },
            assignedAt: new Date(),
            assignedBy: 'me',
          })),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.option.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.option.findUnique({ where: { id: id } });
  }

  update(id: number, updateOptionInput: UpdateOptionInput) {
    return `This action updates a #${id} option`;
  }

  remove(id: number) {
    return `This action removes a #${id} option`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMenuInput: CreateMenuInput) {
    return await this.prisma.menu.create({ data: { ...createMenuInput } });
  }

  async findAll() {
    return await this.prisma.menu.findMany({
      include: {
        stores: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuInput: UpdateMenuInput) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class StoreService {
  constructor(private prismaService: PrismaService) {}
  create(createStoreInput: CreateStoreInput) {
    return 'This action adds a new store';
  }

  async findAll() {
    const result = await this.prismaService.store.findMany({
      include: {
        menus: {
          where: {
            isActive: true,
          },
          include: {
            menu: true,
          },
        },
      },
    });

    return result.map((store) => ({
      ...store,
      menus: store.menus.map((v) => v.menu),
    }));
  }

  async findOne(id: number) {
    return await this.prismaService.store.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateStoreInput: UpdateStoreInput) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}

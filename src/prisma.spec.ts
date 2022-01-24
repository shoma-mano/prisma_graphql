import { Test, TestingModule } from '@nestjs/testing';
import { Chance } from 'chance';
import { PrismaService } from 'nestjs-prisma';

const chance = new Chance();

describe('AppController', () => {
  let prismaService: PrismaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    prismaService = app.get<PrismaService>(PrismaService);
  });

  describe('prisma', () => {
    it('should return "Hello World!"', async () => {
      const prismaresult = await prismaService.store.findMany();
      const result = await prismaService.storesOnMenus.findMany({
        where: {
          isActive: true,
          storeId: 14,
        },
        include: {
          menu: true,
        },
      });
      console.dir(result, { depth: null });
    });
  });

  describe('prisma', () => {
    it('should return ', async () => {
      const prismaresult = await prismaService.store.findMany({
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

      console.dir(
        prismaresult.map((store) => ({
          ...store,
          menus: store.menus.map((v) => v.menu),
        })),
        { depth: null },
      );
    });
  });
});

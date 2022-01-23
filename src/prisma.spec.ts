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
      const result = await prismaService.detail.findMany({
        include: {
          options: true,
        },
      });
      console.dir(result,{depth:null});
    });
  });

});

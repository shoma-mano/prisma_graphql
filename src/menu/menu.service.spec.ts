import { Test, TestingModule } from '@nestjs/testing';
import { MenuService } from './menu.service';
import { PrismaService } from 'nestjs-prisma';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuService, PrismaService],
    }).compile();

    service = module.get<MenuService>(MenuService);
  });

  it('should be defined', async () => {
    const result = await service.create({
      category: 'te',
      img: 'o',
      name: 'l',
    });
    expect(service).toBeDefined();
  });
});

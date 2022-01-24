import { PrismaClient } from '@prisma/client';
import { Item } from '../src/@generated/prisma-nestjs-graphql/item/item.model';
import { CreateMenuInput } from '../src/menu/dto/create-menu.input';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.storesOnMenus.deleteMany();
  await prisma.store.deleteMany();
  await prisma.menu.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'lisa@simpson.com',
      firstname: 'Lisa',
      lastname: 'Simpson',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      role: 'USER',
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'bart@simpson.com',
      firstname: 'Bart',
      lastname: 'Simpson',
      role: 'ADMIN',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
    },
  });

  const menus: CreateMenuInput[] = [
    {
      img: 'test',
      name: '絶品チーズバーガー',
      category: 'バーガー',
    },
    {
      img: 'test',
      name: '絶品ベーコンチーズバーガー',
      category: 'バーガー',
    },
  ];

  const menusResult = await Promise.all(
    menus.map(async (v) => {
      return await prisma.menu.create({
        data: v,
      });
    }),
  );

  // const store = await prisma.store.create({
  //   data: {
  //     name: 'ロッテリア',
  //     img: 'test',
  //     latitude: 135,
  //     longitude: 135,
  //     menus: {
  //       create: menusResult.map((menu) => ({
  //         menuId: menu.id,
  //         isActive: true,
  //       })),
  //     },
  //   },
  //   include: {
  //     menus: true,
  //   },
  // });

  for (let i = 0; i < 100; i++) {
    await prisma.store.create({
      data: {
        name: 'ロッテリア' + i,
        img: 'test',
        latitude: 135,
        longitude: 135,
        menus: {
          create: menusResult.map((menu) => ({
            menuId: menu.id,
            isActive: Math.random() < 0.5,
          })),
        },
      },
      include: {
        menus: true,
      },
    });
  }

  console.dir({ menusResult }, { depth: null });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

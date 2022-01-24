/*
  Warnings:

  - You are about to drop the `_MenuToStore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_MenuToStore` DROP FOREIGN KEY `_MenuToStore_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_MenuToStore` DROP FOREIGN KEY `_MenuToStore_ibfk_2`;

-- DropTable
DROP TABLE `_MenuToStore`;

-- CreateTable
CREATE TABLE `StoresOnMenus` (
    `storeId` INTEGER NOT NULL,
    `menuId` INTEGER NOT NULL,
    `isActive` BOOLEAN NOT NULL,

    PRIMARY KEY (`storeId`, `menuId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StoresOnMenus` ADD CONSTRAINT `StoresOnMenus_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoresOnMenus` ADD CONSTRAINT `StoresOnMenus_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `Menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

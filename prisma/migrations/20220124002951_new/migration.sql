/*
  Warnings:

  - You are about to drop the `DetailOnOptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `DetailOnOptions` DROP FOREIGN KEY `DetailOnOptions_detailId_fkey`;

-- DropForeignKey
ALTER TABLE `DetailOnOptions` DROP FOREIGN KEY `DetailOnOptions_optionId_fkey`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropTable
DROP TABLE `DetailOnOptions`;

-- DropTable
DROP TABLE `Post`;

-- CreateTable
CREATE TABLE `DetailOnOption` (
    `optionId` INTEGER NOT NULL,
    `detailId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`optionId`, `detailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DetailOnOption` ADD CONSTRAINT `DetailOnOption_optionId_fkey` FOREIGN KEY (`optionId`) REFERENCES `Option`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailOnOption` ADD CONSTRAINT `DetailOnOption_detailId_fkey` FOREIGN KEY (`detailId`) REFERENCES `Detail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE `Menu` DROP FOREIGN KEY `Menu_detailId_fkey`;

-- AlterTable
ALTER TABLE `Menu` MODIFY `detailId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_detailId_fkey` FOREIGN KEY (`detailId`) REFERENCES `Detail`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[detailId]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Menu_detailId_key` ON `Menu`(`detailId`);

/*
  Warnings:

  - You are about to drop the column `Worker` on the `Jeux` table. All the data in the column will be lost.
  - Added the required column `Workers` to the `Jeux` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Jeux` DROP COLUMN `Worker`,
    ADD COLUMN `Workers` VARCHAR(191) NOT NULL;

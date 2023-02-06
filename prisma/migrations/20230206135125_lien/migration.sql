/*
  Warnings:

  - You are about to drop the column `url` on the `Jeux` table. All the data in the column will be lost.
  - Added the required column `lien` to the `Jeux` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Jeux` DROP COLUMN `url`,
    ADD COLUMN `lien` VARCHAR(191) NOT NULL;

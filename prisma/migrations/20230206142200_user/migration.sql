/*
  Warnings:

  - You are about to drop the column `Workers` on the `Jeux` table. All the data in the column will be lost.
  - Added the required column `groupe_id` to the `Jeux` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Jeux` DROP COLUMN `Workers`,
    ADD COLUMN `groupe_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Groupe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Jeux` ADD CONSTRAINT `Jeux_groupe_id_fkey` FOREIGN KEY (`groupe_id`) REFERENCES `Groupe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

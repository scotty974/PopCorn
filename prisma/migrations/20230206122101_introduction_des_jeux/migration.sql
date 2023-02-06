-- CreateTable
CREATE TABLE `Jeux` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Title` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Picture` VARCHAR(191) NOT NULL,
    `Worker` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

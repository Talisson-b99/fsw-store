-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "conditions" TEXT NOT NULL DEFAULT 'novo',
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0;

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_receiptId_fkey";

-- AlterTable
ALTER TABLE "Receipt" ADD COLUMN     "products" JSONB[];

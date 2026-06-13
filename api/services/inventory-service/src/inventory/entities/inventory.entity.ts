import { StockLogType } from '../../generated/prisma/client';

// Representasi model Inventory sesuai schema Prisma
export class Inventory {
  id!: number;
  productId!: number;
  stock!: number;
  updatedAt!: Date;
}

// Representasi model StockLog sesuai schema Prisma
export class StockLog {
  id!: number;
  productId!: number;
  quantity!: number;
  type!: StockLogType;
  note!: string | null;
  createdAt!: Date;
}

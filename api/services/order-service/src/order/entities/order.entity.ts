import { OrderStatus } from '../../generated/prisma/client';

// Representasi item dalam order
export class OrderItem {
  id!: number;
  orderId!: number;
  productId!: number;
  jumlah!: number;
  harga!: number;
  createdAt!: Date;
}

// Representasi model Order sesuai schema Prisma
export class Order {
  id!: number;
  userId!: number;
  status!: OrderStatus;
  totalHarga!: number;
  createdAt!: Date;
  updatedAt!: Date;
  items!: OrderItem[];
}

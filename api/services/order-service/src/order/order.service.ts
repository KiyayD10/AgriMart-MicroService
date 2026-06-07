import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderItem } from '../generated/prisma/client';

// Tipe return untuk order beserta itemnya
type OrderWithItems = Order & { items: OrderItem[] };

@Injectable()
export class OrderService {
  // Inject PrismaService untuk akses database
  constructor(private readonly prisma: PrismaService) {}

  // Buat order baru beserta item-itemnya
  async create(createOrderDto: CreateOrderDto): Promise<OrderWithItems> {
    // Hitung total harga dari semua item
    const totalHarga = createOrderDto.items.reduce(
      (acc, item) => acc + item.harga * item.jumlah,
      0,
    );

    return this.prisma.order.create({
      data: {
        userId: createOrderDto.userId,
        totalHarga,
        items: {
          create: createOrderDto.items,
        },
      },
      include: { items: true },
    });
  }

  // Ambil semua order beserta itemnya
  async findAll(): Promise<OrderWithItems[]> {
    return this.prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: { items: true },
    });
  }

  // Ambil satu order berdasarkan id
  async findOne(id: number): Promise<OrderWithItems> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });

    // Kalau data tidak ada lempar error 404
    if (!order) {
      throw new NotFoundException(`Order dengan id ${id} tidak ditemukan`);
    }

    return order;
  }

  // Update status order berdasarkan id
  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<OrderWithItems> {
    // Cek data ada atau tidak
    await this.findOne(id);

    return this.prisma.order.update({
      where: { id },
      data: { status: updateOrderDto.status },
      include: { items: true },
    });
  }

  // Hapus order berdasarkan id
  async remove(id: number): Promise<OrderWithItems> {
    // Cek data ada atau tidak
    await this.findOne(id);

    // Hapus items dulu sebelum hapus order
    await this.prisma.orderItem.deleteMany({
      where: { orderId: id },
    });

    return this.prisma.order.delete({
      where: { id },
      include: { items: true },
    });
  }
}

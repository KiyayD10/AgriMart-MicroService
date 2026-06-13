import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory, StockLog, StockLogType } from '../generated/prisma/client';

@Injectable()
export class InventoryService {
  // Inject PrismaService untuk akses database
  constructor(private readonly prisma: PrismaService) {}

  // Buat record inventory baru untuk sebuah product
  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    // Cek apakah inventory untuk product ini sudah ada
    const existing = await this.prisma.inventory.findUnique({
      where: { productId: createInventoryDto.productId },
    });

    if (existing) {
      throw new ConflictException(
        `Inventory untuk product id ${createInventoryDto.productId} sudah ada`,
      );
    }

    return this.prisma.inventory.create({
      data: createInventoryDto,
    });
  }

  // Ambil semua data inventory
  async findAll(): Promise<Inventory[]> {
    return this.prisma.inventory.findMany();
  }

  // Ambil inventory berdasarkan(id)
  async findOne(productId: number): Promise<Inventory> {
    const inventory = await this.prisma.inventory.findUnique({
      where: { productId },
    });

    // Kalau data tidak ada lempar error 404
    if (!inventory) {
      throw new NotFoundException(
        `Inventory untuk product id ${productId} tidak ditemukan`,
      );
    }

    return inventory;
  }

  // Tambah atau kurangi stok, sekaligus catat ke stock log
  async adjustStock(
    productId: number,
    updateInventoryDto: UpdateInventoryDto,
  ): Promise<Inventory> {
    // Cek dulu inventory-nya ada apa enggk
    const inventory = await this.findOne(productId);

    // Hitung stok baru sesuai tipe IN atau OUT
    const newStock =
      updateInventoryDto.type === StockLogType.IN
        ? inventory.stock + updateInventoryDto.quantity
        : inventory.stock - updateInventoryDto.quantity;

    // Kalau stok keluar lebih besar dari stok yang ada tolak
    if (newStock < 0) {
      throw new ConflictException('Stok tidak cukup untuk dikurangi');
    }

    // Update stok dan catat ke stock log
    const [updatedInventory] = await this.prisma.$transaction([
      this.prisma.inventory.update({
        where: { productId },
        data: { stock: newStock },
      }),
      this.prisma.stockLog.create({
        data: {
          productId,
          quantity: updateInventoryDto.quantity,
          type: updateInventoryDto.type,
          note: updateInventoryDto.note,
        },
      }),
    ]);

    return updatedInventory;
  }

  // Ambil riwayat stock log berdasarkan(id)
  async findLogs(productId: number): Promise<StockLog[]> {
    return this.prisma.stockLog.findMany({
      where: { productId },
      orderBy: { createdAt: 'desc' },
    });
  }
}

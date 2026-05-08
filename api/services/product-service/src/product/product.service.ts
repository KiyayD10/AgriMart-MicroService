import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '../generated/prisma/client';

@Injectable()
export class ProductService {
  // Inject PrismaService untuk akses database
  constructor(private readonly prisma: PrismaService) {}

  // Tambah product baru
  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  // Ambil semua data product
  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Ambil product berdasarkan id
  async findOne(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    // Kalau data tidak ada kaih error 404
    if (!product) {
      throw new NotFoundException(`Product dengan id ${id} tidak ditemukan`);
    }

    return product;
  }

  // Update product berdasarkan id
  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    // Cek data ada atau tidak ada
    await this.findOne(id);

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  // Hapus product berdasarkan id
  async remove(id: number): Promise<Product> {
    // Cek data ada atu tidak
    await this.findOne(id);

    return this.prisma.product.delete({
      where: { id },
    });
  }
}
